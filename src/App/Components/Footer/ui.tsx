import React from "react";
import "./style.scss";
import { Button, Logo } from "../../../Shared";

export const FooterApp = () => {
  const menuItems: {
    title: string;
    path: string;
  }[] = [
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Pricing",
      path: "/",
    },
    {
      title: "About Us",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
  const socialItems: {
    name: string;
    title: React.ReactNode;
    path: string;
  }[] = [
    {
      name: "instagram",
      title: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7721 0C12.1916 0.0506994 13.6618 0.0506994 15.0812 0.101392C16.3486 0.152085 17.5146 0.354867 18.6299 1.0139C20.0494 1.87572 20.9112 3.14309 21.2154 4.76533C21.3674 5.72853 21.4181 6.74243 21.4688 7.70564C21.5195 9.83483 21.4688 11.964 21.4688 14.0932C21.4688 15.2085 21.4181 16.3238 21.0633 17.3884C20.3535 19.4669 18.8834 20.7342 16.7542 21.1398C15.791 21.3426 14.7771 21.3426 13.8139 21.3933C11.6846 21.444 9.60615 21.3933 7.47694 21.3933C6.36165 21.3933 5.24635 21.3426 4.18176 20.9877C2.10325 20.278 0.835867 18.8078 0.430303 16.6786C0.227525 15.7154 0.227525 14.7015 0.176829 13.7383C0.126131 11.6091 0.176829 9.47996 0.176829 7.35077C0.176829 6.23549 0.227525 5.1202 0.582391 4.05559C1.29213 1.9771 2.76229 0.709734 4.89148 0.304173C5.8547 0.101399 6.8686 0.101399 7.83181 0.0506994C8.79502 0 9.75823 0 10.7721 0ZM19.5426 10.4939C19.4919 10.4939 19.5426 10.4939 19.5426 10.4939C19.4919 9.6321 19.4919 8.82097 19.4919 7.95916C19.4919 7.14805 19.4412 6.33692 19.3398 5.52581C19.137 3.70078 18.0724 2.4841 16.2981 2.12924C15.3855 1.92646 14.3716 1.92646 13.4591 1.92646C11.6341 1.87577 9.85976 1.87577 8.03473 1.92646C7.12222 1.92646 6.2097 1.97715 5.34788 2.12924C3.82702 2.38271 2.76243 3.24453 2.30617 4.76538C2.15408 5.27233 2.10339 5.77928 2.05269 6.28622C2.002 8.21264 2.002 10.139 2.002 12.0655C2.002 13.2821 2.05269 14.5495 2.15408 15.7662C2.30617 17.5912 3.42146 18.8586 5.2465 19.1627C6.159 19.3148 7.12222 19.3655 8.08543 19.3655C9.85976 19.4162 11.6341 19.3655 13.4591 19.3655C14.2703 19.3655 15.0814 19.3148 15.8925 19.2134C16.6529 19.1627 17.3627 18.9093 17.971 18.4023C18.9849 17.5912 19.3398 16.5266 19.3905 15.3099C19.4919 13.7891 19.4919 12.1668 19.5426 10.4939Z"
            fill="#081420"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2471 10.6962C16.2471 13.7379 13.8137 16.1712 10.772 16.1712C7.73025 16.1712 5.29688 13.7379 5.29688 10.6455C5.29688 7.65453 7.78094 5.22119 10.8227 5.22119C13.8137 5.22119 16.2471 7.65453 16.2471 10.6962ZM10.7719 14.2448C12.6983 14.2448 14.3205 12.6226 14.3205 10.6962C14.3205 8.76976 12.6983 7.14752 10.7719 7.14752C8.79474 7.14752 7.22318 8.76976 7.22318 10.6962C7.17248 12.6226 8.79474 14.2448 10.7719 14.2448Z"
            fill="#081420"
          />
          <path
            d="M17.7184 4.96758C17.7184 5.67731 17.1607 6.28566 16.451 6.28566C15.7413 6.28566 15.1329 5.67731 15.1836 4.96758C15.1836 4.25785 15.7413 3.7002 16.451 3.7002C17.1607 3.7002 17.7184 4.25784 17.7184 4.96758Z"
            fill="#081420"
          />
        </svg>
      ),
      path: "/",
    },
    {
      name: "in",
      title: (
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6325 12.4811V20.3602H17.0315V12.9987C17.0315 11.1583 16.3989 9.89304 14.731 9.89304C13.4658 9.89304 12.7181 10.7557 12.373 11.5609C12.258 11.8484 12.2005 12.251 12.2005 12.6536V20.3602H7.59952C7.59952 20.3602 7.65703 7.88013 7.59952 6.61487H12.2005V8.57027C12.2005 8.57027 12.2005 8.62777 12.143 8.62777H12.2005V8.57027C12.8331 7.65008 13.8684 6.26979 16.3414 6.26979C19.332 6.26979 21.6325 8.28271 21.6325 12.4811ZM2.88298 0.000976562C1.33014 0.000976562 0.294922 1.03619 0.294922 2.35897C0.294922 3.68174 1.27263 4.71697 2.82546 4.71697H2.88298C4.49333 4.71697 5.47103 3.68175 5.47103 2.35897C5.41352 1.03619 4.43581 0.000976562 2.88298 0.000976562ZM0.525568 20.3602H5.06905V6.61489H0.525568V20.3602Z"
            fill="#081420"
          />
        </svg>
      ),
      path: "/",
    },
    {
      name: "facebook",
      title: (
        <svg
          width="11"
          height="22"
          viewBox="0 0 11 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.95256 10.6695H6.97166V21.338H2.52644V12.415V10.6695H0.43457V6.90414H2.52644V4.4462C2.52644 2.72041 3.36319 0.000976562 6.97166 0.000976562H10.2663V3.66174H7.913C7.54692 3.66174 6.97166 3.87094 6.97166 4.70768V6.90414H10.3186L9.95256 10.6695Z"
            fill="#081420"
          />
        </svg>
      ),
      path: "/",
    },
    {
      name: "twitter",
      title: (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6154 2.82596C20.8121 3.1774 20.0088 3.42842 19.1052 3.52883C20.0088 2.97658 20.7117 2.1231 21.0129 1.11901C20.1595 1.62106 19.2056 1.97249 18.2517 2.1733C17.4484 1.31982 16.2937 0.767578 15.0386 0.767578C12.6287 0.767578 10.6707 2.72555 10.6707 5.13537C10.6707 5.48681 10.7209 5.83823 10.7711 6.13947C7.10619 5.93865 3.89307 4.23169 1.73426 1.57085C1.33262 2.22351 1.1318 2.97658 1.1318 3.77985C1.1318 5.28599 1.88488 6.64151 3.08979 7.44478C2.38692 7.44478 1.68406 7.24397 1.0816 6.89253V6.94273C1.0816 9.05133 2.58774 10.8587 4.59594 11.2603C4.2445 11.3607 3.84287 11.4109 3.44122 11.4109C3.14 11.4109 2.88897 11.3607 2.63795 11.3105C3.1902 13.0677 4.79676 14.3228 6.75475 14.373C5.2486 15.5277 3.39102 16.2306 1.33262 16.2306C0.981189 16.2306 0.629757 16.2306 0.27832 16.1804C2.23631 17.4355 4.49553 18.1383 7.00577 18.1383C15.0888 18.1383 19.4566 11.4611 19.4566 5.68762C19.4566 5.48681 19.4566 5.28599 19.4566 5.13537C20.3101 4.48272 21.0631 3.67944 21.6154 2.82596Z"
            fill="#6C5FBC"
          />
        </svg>
      ),
      path: "/",
    },
  ];

  return (
    <footer className="footerApp">
      <div className="footerApp__containet">
        <Logo className="footer__logo" />
        <ul className="footerApp__menu">
          {menuItems.map((item) => {
            return (
              <li className="footerApp__menuItem" key={item.title}>
                <Button
                  className="footerApp__menuBtn"
                  theme="textOnly"
                  tag="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              </li>
            );
          })}
        </ul>
        <hr className="footerApp__separator" />
        <p className="footerApp__copyright">
          © 2023 EATLY All Rights Reserved.
        </p>
        <ul className="footerApp__socialList">
          {socialItems.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
