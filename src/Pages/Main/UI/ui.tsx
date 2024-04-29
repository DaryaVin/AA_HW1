import React, { useLayoutEffect, useState } from "react";
import "./style.scss";
import { Hero } from "../Components/Hero/ui";
import { PurchaseItem } from "../../../Entities/Purchases";
import { PurchasesAPI } from "../../../Entities/Purchases/API/api";
import { Features } from "../Components/Features/ui";
import { DownloadApp } from "../Components/DownloadApp/ui";
import { RestaurantsBlock } from "../Components/RestaurantsBlock/ui";
import { DishesBlock } from "../Components/DishesBlock/ui";
import { Dashboard } from "../Components/Dashboard/ui";
import { ReviewsBlock } from "../Components/ReviewsBlock/ui";
import { Subscrible } from "../Components/Subscribe/ui";

export const MainPage = () => {
  const [purchaseItemList, setPurchaseItem] = useState<PurchaseItem[]>([]);
  useLayoutEffect(() => {
    setPurchaseItem(PurchasesAPI.getItemsArr());
  }, []);

  return (
    <main className="mainPage">
      {purchaseItemList.length > 0 && (
        <div className="mainPage__conteiner mainPage__hero">
          <Hero purchaseItem={purchaseItemList[0]} />
        </div>
      )}
      <Features />
      <div className="mainPage__conteiner mainPage__downloadApp">
        <DownloadApp />
      </div>
      <div className="mainPage__conteiner mainPage__restaurantsBlock">
        <RestaurantsBlock />
      </div>
      <div className="mainPage__conteiner mainPage__dishesBlock">
        <DishesBlock />
      </div>
      <div className="mainPage__conteiner mainPage__dashboard">
        <Dashboard />
      </div>
      <div className="mainPage__conteiner mainPage__reviewsBlock">
        <ReviewsBlock />
      </div>
      <div className="mainPage__conteiner mainPage__subscrible">
        <Subscrible />
      </div>
    </main>
  );
};
