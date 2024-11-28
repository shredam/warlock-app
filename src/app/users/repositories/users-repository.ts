import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";

import { Aggregate } from "@warlock.js/cascade";
import { User } from "../models/user";

export class UsersRepository extends RepositoryManager<User> {
  /**
   * {@inheritDoc}
   */
  public model = User;

  /**
   * List default options
   */
  protected defaultOptions: RepositoryOptions = this.withDefaultOptions({});

  /**
   * Filter By options
   */
  protected filterBy: FilterByOptions = this.withDefaultFilters({
    name: "like",
    isActive: "bool",
    activationCode: "=",
  });

  public async usersList(skip: number, limit: number) {
    return await new Aggregate("users")
      .addPipelines([
        {
          $lookup: {
            from: "posts",
            localField: "id",
            foreignField: "auther.id",
            as: "posts",
          },
        },
        {
          $lookup: {
            from: "comments",
            localField: "id",
            foreignField: "user.id",
            as: "comments",
          },
        },
        {
          $project: {
            id: 1,
            name: 1,
            email: 1,
            totalPosts: { $size: "$posts" },
            totalComments: { $size: "$comments" },
          },
        },
        { $skip: skip },
        { $limit: Number(limit) },
      ])
      .get();
  }
}

const usersRepository = new UsersRepository();

export default usersRepository;
