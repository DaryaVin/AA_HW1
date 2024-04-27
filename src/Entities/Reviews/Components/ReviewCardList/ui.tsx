import React, { useState } from "react";
import "./style.scss";
import { ReviewCardListProps } from "./model";
import { ReviewCard } from "../ReviewCard/ui";

export const ReviewCardList = ({
  reviewItemsList,
  className,
  ...props
}: ReviewCardListProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <div className={"reviewCardList" + (className ? " " + className : "")}>
      <div className="reviewCardList__gallery">
        <ul
          {...props}
          className={
            "reviewCardList__reviewsList" + (className ? " " + className : "")
          }
          style={{
            marginLeft: -(620 * currentItem) + "px",
          }}
        >
          {reviewItemsList.map((item, index) => {
            return (
              <li key={item.id}>
                <ReviewCard
                  className="reviewCardList__item"
                  reviewItem={item}
                  isHiddenHeader={currentItem !== index}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="reviewCardList__dotsList">
        {reviewItemsList.map((_, index) => {
          return (
            <li key={index} className="reviewCardList__dot">
              <button
                aria-label={"перелиснуть на " + index + " элемент"}
                className="reviewCardList__dotBtn"
                onClick={() => {
                  setCurrentItem(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
