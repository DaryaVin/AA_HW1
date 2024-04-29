import React from "react";
import "./style.scss";
import { Header } from "../../../../Shared";

const helpWrap = (head: string, discription: string) => {
  return (
    <div className="features__itemWrap">
      <dt className="features__headItem">{head}</dt>
      <dd className="features__discriptionItem">{discription}</dd>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="features">
      <Header className="features__header" number={2} isHidden={true}>
        features
      </Header>
      <dl className="features__list">
        {helpWrap("10K+", "Satisfied Costumers All Great Over The World ")}
        {helpWrap("4M", "Healthy Dishes Sold Including Milk Shakes Smooth")}
        {helpWrap(
          "99.99%",
          "Reliable Customer Support We Provide Great Experiences"
        )}
      </dl>
      <div className="features__decorWrap">
        <svg
          className="features__decor1"
          width="384"
          height="221"
          viewBox="0 0 384 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M369.68 577.878C375.051 546.413 382.885 516.817 380.878 482.89C379.444 458.658 373.443 434.809 361.905 412.054C340.393 369.626 312.272 329.18 278.84 296.952C244.679 264.021 211.142 228.189 172.566 202.9C136.7 179.387 98.446 159.962 63.4785 134.41C4.88972 91.5978 -36.5779 23.2802 -71.7742 -42.2882C-90.3944 -76.9764 -108.862 -111.901 -126.689 -147.001C-137.875 -169.027 -147.273 -192.647 -161.028 -213.115"
            stroke="#A596FF"
            strokeWidth="4.01667"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="features__decor2"
          width="428"
          height="221"
          viewBox="0 0 428 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M413.34 566.6C419.134 532.606 427.589 500.633 425.415 463.977C423.861 437.797 417.374 412.03 404.907 387.442C381.662 341.6 351.28 297.896 315.163 263.07C278.258 227.484 242.027 188.764 200.355 161.433C161.61 136.023 120.288 115.028 82.5135 87.4146C19.2219 41.1481 -25.5823 -32.6707 -63.6122 -103.518C-83.7315 -140.999 -103.686 -178.735 -122.948 -216.66C-135.036 -240.46 -145.191 -265.98 -160.052 -288.097"
            stroke="#A596FF"
            strokeWidth="4.01667"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="features__decor3"
          width="128"
          height="221"
          viewBox="0 0 128 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M250.547 -80.8447C227.068 -78.6528 201.569 -78.3091 178.691 -73.183C156.305 -68.1671 132.729 -59.0673 113.033 -49.4564C76.737 -31.7454 58.1474 -6.95103 41.2821 22.6297C13.4496 71.4467 3.3729 122.078 2.93791 175.123C2.64995 210.239 3.99988 244.997 7.66528 279.998C8.78437 290.684 8.22504 302.9 16.0695 312.128"
            stroke="#A596FF"
            strokeWidth="4.44874"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="features__decor4"
          width="128"
          height="221"
          viewBox="0 0 128 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M250.547 -80.8447C227.068 -78.6528 201.569 -78.3091 178.691 -73.183C156.305 -68.1671 132.729 -59.0673 113.033 -49.4564C76.737 -31.7454 58.1474 -6.95103 41.2821 22.6297C13.4496 71.4467 3.3729 122.078 2.93791 175.123C2.64995 210.239 3.99988 244.997 7.66528 279.998C8.78437 290.684 8.22504 302.9 16.0695 312.128"
            stroke="#A596FF"
            strokeWidth="4.44874"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};
