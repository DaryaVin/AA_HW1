import { ReviewItem } from "../../Model/ReviuwsType";

export interface ReviewCardProps {
  className?: string;
  reviewItem: ReviewItem;
  isHiddenHeader?: boolean;
}
