import {
  type RequestHandler,
  type Request,
  type Response,
} from "@warlock.js/core";
import badWordsRepository from "../repositories/bad-words-repository";

const getBadWord: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  const badWord = await badWordsRepository.get(request.int("id"));

  if (!badWord) {
    return response.notFound();
  }

  return response.success({
    badWord,
  });
};

getBadWord.description = "Get Bad Word";

export default getBadWord;
