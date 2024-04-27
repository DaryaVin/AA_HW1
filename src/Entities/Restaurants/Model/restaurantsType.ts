import { HealthCategoryType } from "../../../Shared";

export interface RestaurantItem {
  id: string;
  healthCategory: HealthCategoryType;
  name: string;
  img: string;
  time: number;
  raiting: number;
}
