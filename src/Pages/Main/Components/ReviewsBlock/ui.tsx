import React, { useLayoutEffect, useState } from "react";
import "./style.scss";
import {
  ReviewAPI,
  ReviewCardList,
  ReviewItem,
} from "../../../../Entities/Reviews";
import { Header, SpecHeader } from "../../../../Shared";

export const ReviewsBlock = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  useLayoutEffect(() => {
    setReviewsList(ReviewAPI.getItemsArr().slice(0, 3));
  }, []);
  return (
    <section className="reviewsBlock">
      <Header className="reviewsBlock__header" number={2}>
        <SpecHeader className="reviewsBlock__specHeader">Customer</SpecHeader>{" "}
        {" Say"}
      </Header>
      <div className="reviewsBlock__listWpap">
        <ReviewCardList
          className={"reviewsBlock__list"}
          reviewItemsList={reviewsList}
        />
      </div>
    </section>
  );
};
