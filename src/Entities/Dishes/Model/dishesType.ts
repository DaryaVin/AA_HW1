import { HealthCategoryType } from "../../../Shared";

export interface DishItem {
  price: number;
  name: string;
  img: string;
  healthCategory: HealthCategoryType;
  cookingTime: number;
  raiting: number;
  id: string;
}
