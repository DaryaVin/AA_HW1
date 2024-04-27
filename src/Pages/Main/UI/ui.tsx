import React, { useLayoutEffect, useState } from "react";
import { Hero } from "../Components/Hero/ui";
import { PurchaseItem } from "../../../Entities/Purchases";
import { PurchasesAPI } from "../../../Entities/Purchases/API/api";
import { Features } from "../Components/Features/ui";
import { DownloadApp } from "../Components/DownloadApp/ui";
import { RestaurantsBlock } from "../Components/RestaurantsBlock/ui";
import { DishesBlock } from "../Components/DishesBlock/ui";
import { Dashboard } from "../Components/Dashboard/ui";

export const MainPage = () => {
  const [purchaseItemList, setPurchaseItem] = useState<PurchaseItem[]>([]);
  useLayoutEffect(() => {
    setPurchaseItem(PurchasesAPI.getItemsArr());
  }, []);

  return (
    <main>
      {purchaseItemList.length > 0 && (
        <Hero purchaseItem={purchaseItemList[0]} />
      )}
      <Features />
      <DownloadApp />
      <RestaurantsBlock />
      <DishesBlock />
      <Dashboard />
    </main>
  );
};
