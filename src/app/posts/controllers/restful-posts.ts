import { Restful, RouteResource } from "@warlock.js/core";
import { Post } from "../models/post";
import postsRepository from "../repositories/posts-repository";

class RestfulPosts extends Restful<Post> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = postsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        title: ["required", "string"],
        category: ["required", "number"],
        content: ["string"],
      },
    },
  };
}

const restfulPosts = new RestfulPosts();

export default restfulPosts;
