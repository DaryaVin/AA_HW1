import React from "react";
import "./style.scss";
import { ReviewCardProps } from "./model";
import { RateBox } from "../../../../Shared";

export const ReviewCard = ({
  isHiddenHeader,
  reviewItem,
  className,
}: ReviewCardProps) => {
  const { date, userName, img, content, raiting } = reviewItem;
  return (
    <blockquote className={"reviewCard" + (className ? " " + className : "")}>
      <header
        className={
          "reviewCard__header" +
          (isHiddenHeader ? " reviewCard__header_hidden" : "")
        }
      >
        <img
          className="reviewCard__avatar"
          src={img}
          alt="Аватар пользователя"
        />
        <div className="reviewCard__info">
          <cite className="reviewCard__userName">{userName}</cite>
          <div className="reviewCard__date">{date}</div>
        </div>
      </header>
      <main className="reviewCard__main">{content}</main>
      <footer className="reviewCard__footer">
        <RateBox className="reviewCard__rating" rating={raiting} size={23} />
      </footer>
    </blockquote>
  );
};
