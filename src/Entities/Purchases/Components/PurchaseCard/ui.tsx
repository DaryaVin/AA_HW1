import React from "react";
import "./style.scss";
import { PurchaseCardProps } from "./model";

export const PurchaseCard = ({
  purchaseItem,
  className,
}: PurchaseCardProps) => {
  const { date, status, img, name } = purchaseItem;

  const newClassName = "purchaseCard" + (className ? " " + className : "");
  return (
    <article className={newClassName}>
      <img className="purchaseCard__img" src={img} alt="Фото блюда" />
      <div className="purchaseCard__infoWrap">
        <h3 className="purchaseCard__name">{name}</h3>
        <div
          className={
            "purchaseCard__status" +
            (status !== "On The Way"
              ? " purchaseCard__status_val_" + status
              : "")
          }
        >
          {status}
        </div>
        <div className="purchaseCard__date">{date}</div>
      </div>
    </article>
  );
};
