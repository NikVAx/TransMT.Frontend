import { Button } from "@adobe/react-spectrum";
import "./baseButton.style.css";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface IAs<T> {
  as?: T;
}

export const BaseButton = <T extends ElementType = typeof Button>({
  UNSAFE_className,
  as, className, ...props
}: IAs<T> & ComponentPropsWithoutRef<T>) => {
  const computedClassName = `${UNSAFE_className || className || ""} base-button`;
  const Component = as || Button;
  return <Component  {...props} UNSAFE_className={computedClassName}/>;
};