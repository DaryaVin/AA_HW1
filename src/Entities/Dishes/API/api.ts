import { templateAPI } from "../../../Shared";
import { DishItem } from "../Model/dishesType";

const data: DishItem[] = [
  {
    price: 12.99,
    name: "Fantastic Metal Shirt",
    img: "https://live.staticflickr.com/65535/53679902793_f5fd052f40_m.jpg",
    healthCategory: "Trending",
    cookingTime: 62,
    raiting: 5,
    id: "1",
  },
  {
    price: 14.99,
    name: "Sleek Soft Gloves",
    img: "https://live.staticflickr.com/65535/53679902793_f5fd052f40_m.jpg",
    healthCategory: "Healthy",
    cookingTime: 63,
    raiting: 4.9,
    id: "2",
  },
  {
    price: 18.99,
    name: "Small Steel Salad",
    img: "https://live.staticflickr.com/65535/53680035689_4116d6ae56_m.jpg",
    healthCategory: "Supreme",
    cookingTime: 36,
    raiting: 3.9,
    id: "3",
  },
  {
    price: 13.99,
    name: "Handcrafted Cotton Shirt",
    img: "https://live.staticflickr.com/65535/53679902793_f5fd052f40_m.jpg",
    healthCategory: "Trending",
    cookingTime: 17,
    raiting: 4.7,
    id: "4",
  },
  {
    price: 12.99,
    name: "Small Rubber Computer",
    img: "https://live.staticflickr.com/65535/53680035689_4116d6ae56_m.jpg",
    healthCategory: "Healthy",
    cookingTime: 67,
    raiting: 3,
    id: "5",
  },
  {
    price: 15.99,
    name: "Handmade Granite Car",
    img: "https://live.staticflickr.com/65535/53680035804_43ce8fbc25_m.jpg",
    healthCategory: "Trending",
    cookingTime: 35,
    raiting: 5,
    id: "6",
  },
  {
    price: 12.99,
    name: "Awesome Cotton Fish",
    img: "https://live.staticflickr.com/65535/53680035689_4116d6ae56_m.jpg",
    healthCategory: "Supreme",
    cookingTime: 50,
    raiting: 2.7,
    id: "7",
  },
  {
    price: 16.89,
    name: "Elegant Metal Table",
    img: "https://live.staticflickr.com/65535/53680035689_4116d6ae56_m.jpg",
    healthCategory: "Supreme",
    cookingTime: 17,
    raiting: 4.8,
    id: "8",
  },
  {
    price: 13.88,
    name: "Sleek Cotton Pants",
    img: "https://live.staticflickr.com/65535/53679902793_f5fd052f40_m.jpg",
    healthCategory: "Healthy",
    cookingTime: 33,
    raiting: 4.9,
    id: "9",
  },
  {
    price: 14.99,
    name: "Refined Fresh Shoes",
    img: "https://live.staticflickr.com/65535/53680035804_43ce8fbc25_m.jpg",
    healthCategory: "Trending",
    cookingTime: 58,
    raiting: 5,
    id: "10",
  },
];

export const dishesAPI = templateAPI<DishItem>(data);