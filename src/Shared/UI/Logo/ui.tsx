import React from "react";
import { LogoProps } from "./model";

export const Logo = ({
  width = 80,
  isWithText = true,
  ...props
}: LogoProps) => {
  return (
    <>
      {isWithText ? (
        <svg
          {...props}
          width={width}
          height={width * (31 / 80)}
          viewBox="0 0 80 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.87891"
            y="4.07324"
            width="30.0568"
            height="26.5505"
            rx="4.9561"
            fill="#6C5FBC"
          />
          <rect
            x="0.982067"
            y="1.24989"
            width="28.6239"
            height="25.1176"
            rx="4.23965"
            fill="#DBD9EE"
            stroke="#6C5FBC"
            strokeWidth="1.43288"
          />
          <path
            d="M23.4648 9.10547L7.17926 9.03346"
            stroke="#6C5FBC"
            strokeWidth="1.48218"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.4546 12.3664L19.8322 12.3504C18.3339 12.3438 17.1221 10.8772 17.1276 9.07718C17.1331 7.27716 18.3539 5.82135 19.8522 5.82798L23.4746 5.84399"
            stroke="#6C5FBC"
            strokeWidth="1.48218"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.606 19.537L7.87341 19.4843C7.48563 19.4825 7.16071 19.0999 7.15332 18.634L7.12183 17.4057C7.11451 16.9186 7.44186 16.5072 7.84727 16.5089L12.527 16.5614L12.606 19.537Z"
            stroke="#6C5FBC"
            strokeWidth="1.48218"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0397 21.3078L13.3503 21.2253C12.9625 21.2236 12.6376 20.841 12.6302 20.3751L12.5449 16.5522L23.412 16.685L23.4193 17.1721C23.4739 19.4806 21.9522 21.3375 20.0397 21.3078Z"
            stroke="#6C5FBC"
            strokeWidth="1.48218"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.5519 15.9951C49.5519 16.2962 49.5318 16.5673 49.4917 16.8082H43.393C43.4432 17.4105 43.654 17.8824 44.0255 18.2237C44.3969 18.565 44.8537 18.7357 45.3958 18.7357C46.1788 18.7357 46.736 18.3994 47.0673 17.7268H49.3411C49.1001 18.5299 48.6383 19.1925 47.9557 19.7145C47.2731 20.2265 46.4348 20.4824 45.441 20.4824C44.6378 20.4824 43.915 20.3068 43.2726 19.9554C42.6401 19.594 42.1432 19.087 41.7818 18.4345C41.4304 17.782 41.2547 17.0291 41.2547 16.1758C41.2547 15.3124 41.4304 14.5545 41.7818 13.902C42.1331 13.2494 42.625 12.7475 43.2575 12.3961C43.8899 12.0448 44.6178 11.8691 45.441 11.8691C46.234 11.8691 46.9418 12.0397 47.5642 12.3811C48.1966 12.7224 48.6835 13.2093 49.0248 13.8417C49.3762 14.4641 49.5519 15.1819 49.5519 15.9951ZM47.3684 15.3927C47.3584 14.8506 47.1626 14.419 46.7811 14.0977C46.3997 13.7664 45.9329 13.6008 45.3807 13.6008C44.8587 13.6008 44.417 13.7614 44.0556 14.0827C43.7042 14.3939 43.4884 14.8306 43.4081 15.3927H47.3684ZM50.5486 16.1456C50.5486 15.3024 50.7142 14.5545 51.0455 13.902C51.3868 13.2494 51.8436 12.7475 52.4158 12.3961C52.998 12.0448 53.6456 11.8691 54.3583 11.8691C54.9807 11.8691 55.5228 11.9946 55.9846 12.2455C56.4564 12.4965 56.8329 12.8127 57.114 13.1942V12.0046H59.2372V20.3469H57.114V19.1272C56.8429 19.5187 56.4665 19.845 55.9846 20.106C55.5128 20.357 54.9657 20.4824 54.3433 20.4824C53.6405 20.4824 52.998 20.3017 52.4158 19.9403C51.8436 19.5789 51.3868 19.072 51.0455 18.4195C50.7142 17.7569 50.5486 16.999 50.5486 16.1456ZM57.114 16.1758C57.114 15.6638 57.0136 15.2271 56.8128 14.8657C56.612 14.4942 56.341 14.2132 55.9997 14.0224C55.6584 13.8216 55.2919 13.7213 54.9004 13.7213C54.5089 13.7213 54.1475 13.8166 53.8162 14.0074C53.4849 14.1981 53.2139 14.4792 53.0031 14.8506C52.8023 15.212 52.7019 15.6437 52.7019 16.1456C52.7019 16.6476 52.8023 17.0893 53.0031 17.4708C53.2139 17.8422 53.4849 18.1283 53.8162 18.3291C54.1575 18.5299 54.5189 18.6303 54.9004 18.6303C55.2919 18.6303 55.6584 18.5349 55.9997 18.3442C56.341 18.1434 56.612 17.8623 56.8128 17.5009C57.0136 17.1295 57.114 16.6877 57.114 16.1758ZM63.7507 13.7363V17.7719C63.7507 18.053 63.816 18.2588 63.9465 18.3893C64.087 18.5098 64.3179 18.57 64.6392 18.57H65.618V20.3469H64.2928C62.5159 20.3469 61.6275 19.4836 61.6275 17.7569V13.7363H60.6336V12.0046H61.6275V9.94161H63.7507V12.0046H65.618V13.7363H63.7507ZM69.2424 9.20375V20.3469H67.1343V9.20375H69.2424ZM79.3062 12.0046L74.1412 24.2922H71.8975L73.7045 20.1361L70.3616 12.0046H72.7257L74.8791 17.8322L77.0625 12.0046H79.3062Z"
            fill="#6C5FBC"
          />
        </svg>
      ) : (
        <svg
          width={width}
          height={width * (35 / 38)}
          viewBox="0 0 38 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.14728"
            y="4.10596"
            width="34.6745"
            height="30.6295"
            rx="5.71751"
            fill="#6C5FBC"
          />
          <rect
            x="0.959079"
            y="0.847751"
            width="33.0215"
            height="28.9765"
            rx="4.891"
            fill="#DBD9EE"
            stroke="#6C5FBC"
            strokeWidth="1.65302"
          />
          <path
            d="M26.8957 9.91016L8.10813 9.82708"
            stroke="#6C5FBC"
            strokeWidth="1.70989"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.8844 13.6722L22.7054 13.6537C20.9769 13.646 19.5789 11.9542 19.5853 9.87761C19.5916 7.80105 20.9999 6.12158 22.7285 6.12923L26.9074 6.14771"
            stroke="#6C5FBC"
            strokeWidth="1.70989"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3747 21.9462L8.915 21.8854C8.46764 21.8834 8.0928 21.442 8.08428 20.9046L8.04795 19.4875C8.0395 18.9256 8.41715 18.4509 8.88484 18.453L14.2835 18.5135L14.3747 21.9462Z"
            stroke="#6C5FBC"
            strokeWidth="1.70989"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.9494 23.9861L15.2323 23.8909C14.7849 23.8889 14.4101 23.4476 14.4015 22.91L14.3032 18.4999L26.8397 18.6531L26.8482 19.215C26.9112 21.8782 25.1558 24.0203 22.9494 23.9861Z"
            stroke="#6C5FBC"
            strokeWidth="1.70989"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};