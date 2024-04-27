import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./style.scss";
import { FieldTextProps } from "./model";

export const Input = forwardRef<
  React.RefObject<HTMLInputElement>,
  FieldTextProps
>(function Input(
  {
    children,
    wrapProps,
    afterInputSlot,
    beforeInputSlot,
    theme = "base",
    ...props
  },
  ref
) {
  const newClassName =
    "input__wrap" +
    (wrapProps?.className ? " " + wrapProps.className : "") +
    (props?.disabled ? " input__wrap_disabled" : "") +
    (" input__wrap_theme_" + theme);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return inputRef;
    },
    []
  );

  const onClickField = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) inputRef.current?.focus();
  };

  return (
    <div {...wrapProps} className={newClassName} onClick={onClickField}>
      {beforeInputSlot}
      <input
        {...props}
        className={"input" + (props.className ? " " + props.className : "")}
        ref={inputRef}
      />
      {afterInputSlot}
      {children}
    </div>
  );
});
