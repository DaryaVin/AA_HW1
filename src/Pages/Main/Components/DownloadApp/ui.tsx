import React from "react";
import "./style.scss";
import img from "./Assets/MobileScreen.jpg";
import { Button } from "../../../../Shared";

export const DownloadApp = () => {
  return (
    <section className="downloadApp">
      <div className="downloadApp__imgWrap">
        <img className="downloadApp__img" src={img} alt="Фото телефона" />
      </div>
      <div className="downloadApp__info">
        <h2 className="downloadApp__header">
          Premium <span className="downloadApp__specHeader">Quality</span> For
          Your Health
        </h2>
        <ul className="downloadApp__list">
          <li className="downloadApp__item">
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>
        <div className="downloadApp__btnWrap">
          <Button theme="fillBcg" className="downloadApp__btn">
            <span>Download</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.42578 13.5468C5.42578 12.9234 5.93119 12.418 6.55465 12.418H22.3588C22.9822 12.418 23.4876 12.9234 23.4876 13.5468C23.4876 14.1703 22.9822 14.6757 22.3588 14.6757H6.55465C5.93119 14.6757 5.42578 14.1703 5.42578 13.5468Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6578 4.84626C14.0986 4.40541 14.8134 4.40541 15.2542 4.84626L23.1563 12.7483C23.5972 13.1892 23.5972 13.9039 23.1563 14.3448L15.2542 22.2468C14.8134 22.6877 14.0986 22.6877 13.6578 22.2468C13.2169 21.806 13.2169 21.0912 13.6578 20.6504L20.7616 13.5466L13.6578 6.44272C13.2169 6.00187 13.2169 5.28711 13.6578 4.84626Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
