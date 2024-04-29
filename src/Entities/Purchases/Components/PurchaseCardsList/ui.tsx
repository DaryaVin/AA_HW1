import React from "react";
import "./style.scss";
import { PurchaseCardsListProps } from "./model";
import { PurchaseCard } from "../PurchaseCard/ui";

export const PurchaseCardsList = ({
  purchaseItemsList,
  className,
  ...props
}: PurchaseCardsListProps) => {
  return (
    <ul
      {...props}
      className={"purchaseCardList" + (className ? " " + className : "")}
    >
      {purchaseItemsList.map((item) => {
        return (
          <li className="purchaseCardList__item" key={item.id}>
            <PurchaseCard purchaseItem={item} />
          </li>
        );
      })}
    </ul>
  );
};
