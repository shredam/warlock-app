import type { RouteResource } from "@warlock.js/core";
import { Restful } from "@warlock.js/core";
import type { Comment } from "../models/comment";
import commentsRepository from "../repositories/comments-repository";

class RestfulComments extends Restful<Comment> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = commentsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        content: ["required", "string"],
        post: ["required", "number"],
      },
    },
  };
}

const restfulComments = new RestfulComments();

export default restfulComments;
