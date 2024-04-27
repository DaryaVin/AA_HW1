import React from "react";
import "./style.scss";
import { DishCardsListProps } from "./model";
import { DishCard } from "../DishCard/ui";

export const DishCardsList = ({
  dishItemsList,
  className,
  ...props
}: DishCardsListProps) => {
  return (
    <ul
      {...props}
      className={"dishCardsList" + (className ? " " + className : "")}
    >
      {dishItemsList.map((item) => {
        return (
          <li key={item.id}>
            <DishCard className="dishCardsList__item" dishItem={item} />
          </li>
        );
      })}
    </ul>
  );
};
