import React from "react";
import "./style.scss";
import { HealthCategoryProps } from "./model";

export const HealthCategory = ({
  healthCategory,
  className,
  ...props
}: HealthCategoryProps) => {
  return (
    <div
      {...props}
      className={"healthCategory__Wrap" + (className ? " " + className : "")}
    >
      <span
        className={"healthCategory " + ("healthCategory_val_" + healthCategory)}
      >
        {healthCategory}
      </span>
    </div>
  );
};
