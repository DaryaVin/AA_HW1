import React from "react";
import "./style.scss";
import { ButtonProps } from "./model";

export const Button = ({
  tag = "button",
  children,
  className,
  theme = "withBorder",
  type = "button",
  ...props
}: ButtonProps) => {
  const newClassName =
    "button" + (className ? " " + className : "") + " button_theme_" + theme;

  return React.createElement(
    tag,
    {
      ...props,
      className: newClassName,
      type: type,
    },
    children
  );
};
