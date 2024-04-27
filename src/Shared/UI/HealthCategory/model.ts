import { HealthCategoryType } from "../../Model/generalType";

export interface HealthCategoryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  healthCategory: HealthCategoryType;
}
