export interface PurchaseItem {
  id: string;
  img: string;
  name: string;
  status: "Deliveried" | "Celceled" | "On The Way";
  date: string;
}

export interface PurchasesParametr {
  name: "Expense" | "Vocher Usage";
  description: string;
  price: number;
  progress: number;
}
