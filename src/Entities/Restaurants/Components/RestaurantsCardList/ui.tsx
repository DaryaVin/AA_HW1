import React from "react";
import "./style.scss";
import { RestaurantsCardListProps } from "./model";
import { RestaurantCard } from "../RestaurantCard/ui";

export const RestaurantsCardList = ({
  reviewItemsList,
  className,
  ...props
}: RestaurantsCardListProps) => {
  return (
    <ul
      {...props}
      className={"restaurantsCardList" + (className ? " " + className : "")}
    >
      {reviewItemsList.map((item) => {
        return (
          <li className="restaurantsCardList__item" key={item.id}>
            <RestaurantCard restaurantItem={item} />
          </li>
        );
      })}
    </ul>
  );
};
