import { Category } from "./category";

export const CategoryBluePrint = Category.blueprint();

export const categoryMigration: any = async () => {
  CategoryBluePrint.unique("id");
  CategoryBluePrint.textIndex("tag");
};

categoryMigration.blueprint = CategoryBluePrint;

categoryMigration.down = async () => {
  CategoryBluePrint.dropUniqueIndex("id");
  CategoryBluePrint.dropTextIndex("tag");
};
