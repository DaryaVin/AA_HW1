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
          <li key={item.id}>
            <RestaurantCard
              className="restaurantsCardList__item"
              restaurantItem={item}
            />
          </li>
        );
      })}
    </ul>
  );
};
