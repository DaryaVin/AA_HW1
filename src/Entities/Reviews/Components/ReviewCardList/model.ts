import { ReviewItem } from "../../Model/ReviuwsType";

export interface ReviewCardListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  reviewItemsList: ReviewItem[];
}
