import React from "react";
import "./style.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export const Select = ({ children, className, ...props }: SelectProps) => {
  return (
    <select
      {...props}
      className={"select" + (className ? " " + className : "")}
    >
      {children}
    </select>
  );
};
