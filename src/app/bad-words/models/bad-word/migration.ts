import { BadWord } from "./bad-word";

export const BadWordBluePrint = BadWord.blueprint();

export const badWordMigration: any = async () => {
  BadWordBluePrint.unique("id");
};

badWordMigration.blueprint = BadWordBluePrint;

badWordMigration.down = async () => {
  BadWordBluePrint.dropUniqueIndex("id");
};
