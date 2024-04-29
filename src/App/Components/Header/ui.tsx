import React, { useState } from "react";
import "./style.scss";
import { Button, Logo } from "../../../Shared";

export const HeaderApp = () => {
  const menuItems: {
    title: string;
    path: string;
  }[] = [
    {
      title: "Menu",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Pricing",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  return (
    <header className="headerApp">
      <div className="headerApp__container">
        <a className="headerApp__logoWrap" href="/">
          <Logo />
        </a>
        <nav
          className={
            "headerApp__menu" + (isShowMenu ? " headerApp__menu_active" : "")
          }
        >
          <ul className="headerApp__menuItemList">
            {menuItems.map((item) => {
              return (
                <li className="headerApp__menuItem" key={item.title}>
                  <Button
                    className="headerApp__menuBtn"
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
          <div
            className={
              "headerApp__logBtnsWrap" +
              (isShowMenu ? " headerApp__logBtnsWrap_active" : "")
            }
          >
            <Button
              className="headerApp__logBtn headerApp__logBtn_login"
              theme="textOnly"
            >
              Login
            </Button>
            <Button
              className="headerApp__logBtn headerApp__logBtn_singUp"
              theme="fillBcg"
            >
              Sign up
            </Button>
          </div>
        </nav>
        <button
          type="button"
          className={
            "headerApp__burger" +
            (isShowMenu ? " headerApp__burger_active" : "")
          }
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <span className="headerApp__burger__helper"></span>
          Open/close nav menu
        </button>
      </div>
    </header>
  );
};
