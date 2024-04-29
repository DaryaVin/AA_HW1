import React from "react";
import "./style.scss";
import imgDish from "./Asset/dishPhoto.png";
import imgGraph from "./Asset/graph.png";
import { DecorComponentProps } from "./model";
import { PurchaseCard } from "../../Entities/Purchases";

export const DecorComponent = ({
  purchaseItem,
  className,
  isWithAdditionalElements = true,
}: DecorComponentProps) => {
  return (
    <div
      className={
        "decorComponent" +
        (className ? " " + className : "") +
        (isWithAdditionalElements
          ? " decorComponent_isWithAdditionalElements"
          : "")
      }
    >
      <div className="decorComponent__dishWrap">
        <img className="decorComponent__dish" src={imgDish} />
      </div>
      <img className="decorComponent__graph" src={imgGraph} />
      <div className="decorComponent__purchaseWrap">
        <PurchaseCard
          className="decorComponent__purchase"
          purchaseItem={purchaseItem}
        />
      </div>
    </div>
  );
};
