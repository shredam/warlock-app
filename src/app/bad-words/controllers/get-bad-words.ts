import {
  type RequestHandler,
  type Request,
  type Response,
} from "@warlock.js/core";
import badWordsRepository from "../repositories/bad-words-repository";

const getBadWords: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const { documents: badWords, paginationInfo } =
    await badWordsRepository.listActive(request.all());

  return response.success({
    badWords,
    paginationInfo,
  });
};

getBadWords.description = "Get Bad Words";

export default getBadWords;
