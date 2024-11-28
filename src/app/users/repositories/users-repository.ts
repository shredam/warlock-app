import type { FilterByOptions, RepositoryOptions } from "@warlock.js/core";
import { RepositoryManager } from "@warlock.js/core";

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
    totalPosts: "number",
    totalComments: "number",
  });

  public async usersList(page: number, limit: number) {
    return await this.list({ page: page, limit: limit });
  }
}

const usersRepository = new UsersRepository();

export default usersRepository;
