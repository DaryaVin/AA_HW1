import React, { useLayoutEffect, useState } from "react";
import "./style.scss";
import { RestaurantsCardList } from "../../../../Entities/Restaurants/Components/RestaurantsCardList/ui";
import {
  RestaurantItem,
  restaurantsAPI,
} from "../../../../Entities/Restaurants";
import { Button } from "../../../../Shared";

export const RestaurantsBlock = () => {
  const [restaurantsList, setRestaurantsList] = useState<RestaurantItem[]>([]);
  useLayoutEffect(() => {
    setRestaurantsList(restaurantsAPI.getItemsArr().slice(0, 3));
  }, []);
  return (
    <section className="restaurantsBlock">
      <h2 className="restaurantsBlock__header">
        {"Our Top "}
        <span className="restaurantsBlock__specHeader">Restaurants</span>
      </h2>
      <RestaurantsCardList
        className="restaurantsBlock__list"
        reviewItemsList={restaurantsList}
      />
      <div className="restaurantsBlock__btnWpar">
        <Button className="restaurantsBlock__btn" theme="textOnly">
          <span>View All</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.42578 13.5468C5.42578 12.9234 5.93119 12.418 6.55465 12.418H22.3588C22.9822 12.418 23.4876 12.9234 23.4876 13.5468C23.4876 14.1703 22.9822 14.6757 22.3588 14.6757H6.55465C5.93119 14.6757 5.42578 14.1703 5.42578 13.5468Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6578 4.84626C14.0986 4.40541 14.8134 4.40541 15.2542 4.84626L23.1563 12.7483C23.5972 13.1892 23.5972 13.9039 23.1563 14.3448L15.2542 22.2468C14.8134 22.6877 14.0986 22.6877 13.6578 22.2468C13.2169 21.806 13.2169 21.0912 13.6578 20.6504L20.7616 13.5466L13.6578 6.44272C13.2169 6.00187 13.2169 5.28711 13.6578 4.84626Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};
