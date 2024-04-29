import React from "react";
import "./style.scss";
import { HeaderProps, SpecHeaderProps } from "./model";

export const Header = ({
  number = 1,
  className,
  children,
  isHidden = false,
  ...props
}: HeaderProps) => {
  const tag = "h" + number;
  return React.createElement(
    tag,
    {
      ...props,
      className:
        "header" +
        (" header__h" + number) +
        (className ? " " + className : "") +
        (isHidden ? " header_hidden" : ""),
    },
    children
  );
};

export const SpecHeader = ({
  className,
  children,
  ...props
}: SpecHeaderProps) => {
  return (
    <span
      {...props}
      className={"specHeader" + (className ? " " + className : "")}
    >
      {children}
    </span>
  );
};
