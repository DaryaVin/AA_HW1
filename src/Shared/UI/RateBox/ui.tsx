import React from "react";
import "./style.scss";
import { StarIcon } from "../StarIcon/ui";

interface RateBoxProps {
  rating: number;
  size?: number;
  className?: string;
}
export const RateBox = ({ size = 17, rating, className }: RateBoxProps) => {
  return (
    <>
      <ul
        key={"RateBox"}
        className={className ? className + " rateBox" : "rateBox"}
      >
        {[...Array(5)].map((item, index) => {
          let widthFullStar = 0;

          if (rating - index >= 1) {
            widthFullStar = size;
          } else {
            if (rating - index > 0) {
              widthFullStar = (rating - index) * size;
            }
          }

          return (
            <li
              className="rateBox__item"
              style={{ width: size, height: size }}
              key={index}
            >
              <div
                className="rateBox__wrap rateBox__wrapEmptyStar"
                style={{ height: size, width: size }}
              >
                <StarIcon size={size} className="rateBox__icon" />
              </div>
              <div
                className="rateBox__wrap rateBox__wrapFullStar"
                style={{ height: size, width: widthFullStar }}
              >
                <StarIcon size={size} className="rateBox__icon" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
