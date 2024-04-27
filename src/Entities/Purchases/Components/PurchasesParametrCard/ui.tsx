import React from "react";
import "./style.scss";
import { PurchasesParametrCardProps } from "./model";

export const PurchasesParametrCard = ({
  className,
  purchasesParametr,
}: PurchasesParametrCardProps) => {
  const { name, description, price, progress } = purchasesParametr;

  const progressStr = progress + "%";
  return (
    <div
      className={"purchasesParametrCard" + (className ? " " + className : "")}
    >
      <main className="purchasesParametrCard__main">
        <div
          className={
            "purchasesParametrCard__icon " +
            (name === "Expense"
              ? " purchasesParametrCard__icon_expence"
              : " purchasesParametrCard__icon_vocher")
          }
        >
          {name === "Expense" ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3524 2.77494L13.321 2.84823L10.2845 9.89494H7.30039C6.58839 9.89494 5.9078 10.0415 5.29004 10.3033L7.12239 5.92659L7.16427 5.82188L7.23757 5.65435C7.25851 5.59153 7.27945 5.52871 7.31086 5.47635C8.68251 2.30376 10.2322 1.58129 13.3524 2.77494Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9957 10.1043C18.5245 9.95773 18.0219 9.8949 17.5194 9.8949H10.2842L13.3206 2.8482L13.3521 2.7749C13.5091 2.82726 13.6557 2.90055 13.8128 2.96337L16.1268 3.93714C17.4147 4.47114 18.3151 5.02608 18.8596 5.6962C18.9643 5.82184 19.0481 5.93702 19.1214 6.07314C19.2156 6.21973 19.2889 6.36631 19.3308 6.52337C19.3727 6.61761 19.4041 6.71184 19.425 6.79561C19.7077 7.67514 19.5402 8.75361 18.9957 10.1043Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.6303 15.0052V17.0469C22.6303 17.2563 22.6198 17.4657 22.6093 17.6752C22.4104 21.3294 20.3686 23.1722 16.4945 23.1722H8.32744C8.07615 23.1722 7.82485 23.1513 7.58403 23.1199C4.25438 22.9 2.47438 21.12 2.2545 17.7903C2.22309 17.5495 2.20215 17.2982 2.20215 17.0469V15.0052C2.20215 12.9006 3.47956 11.0892 5.30144 10.3039C5.92968 10.0421 6.5998 9.89551 7.3118 9.89551H17.5311C18.0441 9.89551 18.5467 9.9688 19.0074 10.1049C21.0911 10.7436 22.6303 12.6912 22.6303 15.0052Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.12208 5.92676L5.28972 10.3035C3.46784 11.0888 2.19043 12.9002 2.19043 15.0048V11.9369C2.19043 8.96323 4.30549 6.4817 7.12208 5.92676Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.6277 11.9358V15.0036C22.6277 12.7001 21.099 10.7421 19.0049 10.1139C19.5494 8.7527 19.7064 7.6847 19.4446 6.7947C19.4237 6.70046 19.3923 6.60623 19.3504 6.52246C21.2979 7.52764 22.6277 9.59034 22.6277 11.9358Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8963 22.2331H7.42572C4.28455 22.2331 2.19043 20.6625 2.19043 16.9978V9.6684C2.19043 6.00369 4.28455 4.43311 7.42572 4.43311H17.8963C21.0375 4.43311 23.1316 6.00369 23.1316 9.6684V16.9978C23.1316 20.6625 21.0375 22.2331 17.8963 22.2331Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6617 16.4738C14.3965 16.4738 15.8029 15.0674 15.8029 13.3326C15.8029 11.5978 14.3965 10.1914 12.6617 10.1914C10.9269 10.1914 9.52051 11.5978 9.52051 13.3326C9.52051 15.0674 10.9269 16.4738 12.6617 16.4738Z"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.85645 10.7153V15.9506"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.4668 10.7153V15.9506"
                stroke="currentColor"
                strokeWidth="1.57059"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="purchasesParametrCard__info">
          <h4 className="purchasesParametrCard__name">{name}</h4>
          <div className="purchasesParametrCard__description">
            {description}
          </div>
        </div>
        <div className="purchasesParametrCard__price">{"$" + price}</div>
      </main>
      <footer
        className={
          "purchasesParametrCard__progressBar" +
          (name === "Expense"
            ? " purchasesParametrCard__progressBar_expence"
            : " purchasesParametrCard__progressBar_vocher")
        }
      >
        <div
          className="purchasesParametrCard__propgressLine"
          style={{
            width: progressStr,
          }}
        ></div>
      </footer>
    </div>
  );
};
