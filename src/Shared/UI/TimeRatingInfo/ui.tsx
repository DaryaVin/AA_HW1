import React from "react";
import "./style.scss";
import { TimeRatingInfoProps } from "./model";
import { StarIcon } from "../StarIcon/ui";

export const TimeRatingInfo = ({
  time,
  raiting,
  className,
  ...props
}: TimeRatingInfoProps) => {
  let cookingTimeCorrectFormate = "";
  if (Math.floor(time / 60) > 0) {
    cookingTimeCorrectFormate += Math.floor(time / 60) + "h";
  }
  if (time % 60 > 0) {
    cookingTimeCorrectFormate += " " + (time % 60) + "min";
  }
  cookingTimeCorrectFormate += " •";
  return (
    <div
      {...props}
      className={"timeRatingInfo" + (className ? " " + className : "")}
    >
      <div className="timeRatingInfo__time">
        {cookingTimeCorrectFormate.trim()}
      </div>
      <div className="timeRatingInfo__raiting">
        <StarIcon className="timeRatingInfo__raitingIcon" size={17.19} />
        {raiting}
      </div>
    </div>
  );
};
