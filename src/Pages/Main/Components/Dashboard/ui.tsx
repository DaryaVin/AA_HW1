import React, { useLayoutEffect, useState } from "react";
import "./style.scss";
import {
  PurchaseCardsList,
  PurchaseItem,
  PurchasesAPI,
  PurchasesParametr,
  PurchasesParametrCard,
} from "../../../../Entities/Purchases";
import { Select } from "../../../../Shared";

export const Dashboard = () => {
  const [purchasesList, setPurchasesList] = useState<PurchaseItem[]>([]);

  const purchasesParametrArr: PurchasesParametr[] = [
    {
      name: "Expense",
      description: "Increased By 10%",
      price: 409,
      progress: 70,
    },
    {
      name: "Vocher Usage",
      description: "Increased By 5%",
      price: 45.78,
      progress: 50,
    },
  ];

  useLayoutEffect(() => {
    setPurchasesList(PurchasesAPI.getItemsArr().slice(0, 3));
  }, []);
  return (
    <section className="dashboard">
      <div className="dashboard__purchaseWrap">
        <h2 className="dashboard__header">
          Premium <span className="dashboard__specHeader">Quality</span> For
          Your Health
        </h2>
        <PurchaseCardsList purchaseItemsList={purchasesList} />
      </div>
      <div className="dashboard_board">
        <div className="dashboard__info">
          <h3 className="dashboard__infoHead">Purchases</h3>
          <Select className="dashboard__select" name="timeline">
            <option className="dashboard__selectVal" value="mounth">
              This mounth
            </option>
            <option className="dashboard__selectVal" value="week">
              This week
            </option>
            <option className="dashboard__selectVal" value="year">
              This year
            </option>
          </Select>
        </div>
        <PurchasesParametrCard
          className="dashboard__param"
          purchasesParametr={purchasesParametrArr[0]}
        />
        <PurchasesParametrCard
          className="dashboard__param"
          purchasesParametr={purchasesParametrArr[1]}
        />
      </div>
    </section>
  );
};
