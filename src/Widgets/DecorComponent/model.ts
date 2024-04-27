import { PurchaseItem } from "../../Entities/Purchases";

export interface DecorComponentProps {
  className?: string;
  purchaseItem: PurchaseItem;
  isWithAdditionalElements?: boolean;
}
