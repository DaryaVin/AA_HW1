import React from "react";
import "./App.scss";
import { Button, Input, Logo, RateBox, Select, StarIcon } from "../Shared";
import { DishCard, DishItem } from "../Entities/Dishes";
import { RestaurantCard, RestaurantItem } from "../Entities/Restaurants";
import {
  PurchaseCard,
  PurchaseItem,
  PurchasesParametr,
  PurchasesParametrCard,
} from "../Entities/Purchases";
import { ReviewCard, ReviewCardList, ReviewItem } from "../Entities/Reviews";
import { DecorComponent } from "../Widgets";
import { MainPage } from "../Pages/Main";

function App() {
  const dishItem: DishItem = {
    price: 12.99,
    name: "Chicken Hell",
    img: "https://live.staticflickr.com/65535/53679902793_f5fd052f40_m.jpg",
    healthCategory: "Supreme",
    cookingTime: 62,
    raiting: 5,
    id: "1",
  };
  const restaurantItem: RestaurantItem = {
    name: "The Burger King",
    img: "https://live.verstaem.online/eatly/src/img/restaurants/2.jpg",
    healthCategory: "Trending",
    time: 62,
    raiting: 4.6,
    id: "1",
  };
  const purchaseItem: PurchaseItem = {
    name: "The Burger King",
    img: "https://live.staticflickr.com/65535/53681042010_625f83ab7f_b.jpg",
    date: "3:09 PM",
    status: "On The Way",
    id: "1",
  };
  const reviewItemList: ReviewItem[] = [
    {
      id: "1",
      img: "https://live.verstaem.online/eatly/src/img/review/1.png",
      userName: "Alexander R",
      date: "01 Year With Us",
      raiting: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error esse ipsum aperiam reprehenderit dignissimos id eius aut, deserunt molestias porro natus consequuntur. Inventore numquam voluptas laborum, maxime maiores dolorem?",
    },
    {
      id: "2",
      img: "https://live.verstaem.online/eatly/src/img/review/1.png",
      userName: "Alexander R",
      date: "01 Year With Us",
      raiting: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error esse ipsum aperiam reprehenderit dignissimos id eius aut, deserunt molestias porro natus consequuntur. Inventore numquam voluptas laborum, maxime maiores dolorem?",
    },
    {
      id: "3",
      img: "https://live.verstaem.online/eatly/src/img/review/1.png",
      userName: "Alexander R",
      date: "01 Year With Us",
      raiting: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error esse ipsum aperiam reprehenderit dignissimos id eius aut, deserunt molestias porro natus consequuntur. Inventore numquam voluptas laborum, maxime maiores dolorem?",
    },
  ];
  const purchasesParametr: PurchasesParametr = {
    name: "Vocher Usage",
    progress: 80,
    description: "Increased By 10%",
    price: 400,
  };
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
