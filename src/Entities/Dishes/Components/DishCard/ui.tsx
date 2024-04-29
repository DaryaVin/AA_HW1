import React, { useState } from "react";
import "./style.scss";
import { DishCardProps } from "./model";
import { Header, HealthCategory, TimeRatingInfo } from "../../../../Shared";

export const DishCard = ({ dishItem, className }: DishCardProps) => {
  const { img, healthCategory, price, name, cookingTime, raiting } = dishItem;

  const [isLike, setIsLike] = useState<boolean>(false);

  const newClassName = "dishCard" + (className ? " " + className : "");

  const priceCorrectFormat = (
    <div className="dishCard__price">
      <span className="dishCard__wholePartOfPrice">
        {"$" + Math.floor(price / 1) + "."}
      </span>
      <span className="dishCard__decimalPartOfPrice">
        {Math.floor((price % 1) * 100)}
      </span>
    </div>
  );

  const onClickLikeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <article className={newClassName}>
      <button
        aria-label="like button"
        className={"dishCard__likeBtn"}
        onClick={onClickLikeBtn}
      >
        {isLike ? (
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0793 0.0249023C3.59099 0.0249023 0.619141 2.99837 0.619141 6.86016C0.619141 9.52424 1.71341 11.7672 3.16368 13.6251C4.60897 15.4767 6.47361 17.0309 8.15931 18.3316L11.0678 20.576C11.3863 20.8218 11.804 20.8218 12.1225 20.576L15.031 18.3317C16.7167 17.0309 18.5813 15.4767 20.0266 13.6251C21.4769 11.7672 22.5712 9.52424 22.5712 6.86016C22.5712 2.99837 19.5993 0.0249023 16.111 0.0249023C14.3128 0.0249023 12.7306 0.986082 11.5951 2.22977C10.4597 0.986082 8.87745 0.0249023 7.0793 0.0249023Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.619141 6.66326C0.619141 3.27576 3.59099 0.66748 7.0793 0.66748C8.87745 0.66748 10.4597 1.51061 11.5951 2.60156C12.7306 1.51061 14.3128 0.66748 16.111 0.66748C19.5993 0.66748 22.5712 3.27576 22.5712 6.66326C22.5712 8.98374 21.5816 11.0244 20.2106 12.7493C18.842 14.4712 17.0517 15.9327 15.3376 17.1202C14.6829 17.5737 14.0206 17.9921 13.4144 18.3009C12.8452 18.5907 12.1907 18.8563 11.5951 18.8563C10.9996 18.8563 10.3451 18.5907 9.77593 18.3009C9.16974 17.9921 8.50739 17.5737 7.85268 17.1202C6.13857 15.9327 4.34831 14.4712 2.9797 12.7493C1.60871 11.0244 0.619141 8.98374 0.619141 6.66326ZM7.0793 2.54908C4.47109 2.54908 2.50074 4.46719 2.50074 6.66326C2.50074 8.42381 3.2481 10.0629 4.4527 11.5785C5.65968 13.0971 7.28368 14.4369 8.9242 15.5735C9.54498 16.0035 10.1297 16.3695 10.6298 16.6242C11.167 16.8977 11.4781 16.9747 11.5951 16.9747C11.7122 16.9747 12.0233 16.8977 12.5605 16.6242C13.0606 16.3695 13.6453 16.0035 14.2661 15.5735C15.9066 14.4369 17.5306 13.0971 18.7376 11.5785C19.9422 10.0629 20.6896 8.42381 20.6896 6.66326C20.6896 4.46719 18.7192 2.54908 16.111 2.54908C14.613 2.54908 13.2143 3.444 12.341 4.57986C12.1629 4.81147 11.8873 4.9472 11.5951 4.9472C11.303 4.9472 11.0274 4.81147 10.8493 4.57986C9.97597 3.444 8.57725 2.54908 7.0793 2.54908Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <div className="dishCard__imgWrap">
        <img className="dishCard__img" src={img} alt="Фото блюда" />
        <HealthCategory
          healthCategory={healthCategory}
          className="dishCard__healthCategory"
        />
      </div>
      <Header className="dishCard__name" number={3}>
        {name}
      </Header>
      <TimeRatingInfo
        className="dishCard__info"
        time={cookingTime}
        raiting={raiting}
      />
      <div className="dishCard__bottom">
        {priceCorrectFormat}
        <button aria-label="add dish" className="dishCard__addBtn">
          Добавить
        </button>
      </div>
    </article>
  );
};
