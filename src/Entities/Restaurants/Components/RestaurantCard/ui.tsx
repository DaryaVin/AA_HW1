import React, { useState } from "react";
import "./style.scss";
import { RestaurantCardProps } from "./model";
import { HealthCategory } from "../../../../Shared";
import { TimeRatingInfo } from "../../../../Shared";

export const RestaurantCard = ({
  restaurantItem,
  className,
}: RestaurantCardProps) => {
  const { img, healthCategory, name, time, raiting } = restaurantItem;

  const [isLike, setIsLike] = useState<boolean>(true);

  const newClassName = "restaurantCard" + (className ? " " + className : "");

  const onClickLikeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <article className={newClassName}>
      <img className="restaurantCard__img" src={img} alt="Фото ресторана" />
      <div className="restaurantCard__infoWrap">
        <HealthCategory
          healthCategory={healthCategory}
          className="restaurantCard__healthCategory"
        />
        <h3 className="restaurantCard__name">{name}</h3>
        <TimeRatingInfo
          className="restaurantCard__info"
          time={time}
          raiting={raiting}
        />
      </div>
      <button
        aria-label="like button"
        className={
          "restaurantCard__likeBtn" +
          (isLike ? " restaurantCard__likeBtn_isLike" : "")
        }
        onClick={onClickLikeBtn}
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </article>
  );
};
