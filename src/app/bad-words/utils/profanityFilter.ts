import badWordsRepository from "../repositories/bad-words-repository";

export const censorBadWords = async (text: string): Promise<string> => {
  const badWords = await badWordsRepository.all();
  const badWordsList = badWords.map(bw => bw.get("word"));

  if (badWordsList.length === 0) {
    return text;
  }

  const regex = new RegExp(`\\b(${badWordsList.join("|")})\\b`, "gi");
  return text.replace(regex, match => "*".repeat(match.length));
};
