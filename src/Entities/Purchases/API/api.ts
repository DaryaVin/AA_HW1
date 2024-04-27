import { templateAPI } from "../../../Shared";
import { PurchaseItem } from "../Model/purchaseType";

const data: PurchaseItem[] = [
  {
    name: "Licensed Metal Computer",
    img: "https://live.staticflickr.com/65535/53681042010_625f83ab7f_b.jpg",
    status: "On The Way",
    date: "3:09 PM",
    id: "1",
  },
  {
    name: "Incredible Metal Chair",
    img: "https://live.staticflickr.com/65535/53680583281_56379ba395_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "2",
  },
  {
    name: "Awesome Bronze Table",
    img: "https://live.staticflickr.com/65535/53680809178_cb9fb4c065_b.jpg",
    status: "Celceled",
    date: "Yesterday",
    id: "3",
  },
  {
    name: "Licensed Rubber Salad",
    img: "https://live.staticflickr.com/65535/53681042010_625f83ab7f_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "4",
  },
  {
    name: "Practical Frozen Bacon",
    img: "https://live.staticflickr.com/65535/53680583281_56379ba395_b.jpg",
    status: "Celceled",
    date: "Yesterday",
    id: "5",
  },
  {
    name: "Modern Granite Bacon",
    img: "https://live.staticflickr.com/65535/53680809178_cb9fb4c065_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "6",
  },
  {
    name: "Licensed Soft Keyboard",
    img: "https://live.staticflickr.com/65535/53681042010_625f83ab7f_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "7",
  },
  {
    name: "Handcrafted Soft Car",
    img: "https://live.staticflickr.com/65535/53680809178_cb9fb4c065_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "8",
  },
  {
    name: "Practical Granite Soap",
    img: "https://live.staticflickr.com/65535/53680583281_56379ba395_b.jpg",
    status: "Celceled",
    date: "Yesterday",
    id: "9",
  },
  {
    name: "Handcrafted Bronze Chair",
    img: "https://live.staticflickr.com/65535/53681042010_625f83ab7f_b.jpg",
    status: "Deliveried",
    date: "Yesterday",
    id: "10",
  },
];

export const PurchasesAPI = templateAPI<PurchaseItem>(data);
