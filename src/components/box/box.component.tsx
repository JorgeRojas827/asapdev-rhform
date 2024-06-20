import { ComponentProps, ElementType } from "react";
import clsx from "clsx";

type TBoxProps<T extends ElementType> = Omit<ComponentProps<T>, "tag"> & {
  tag?: T;
  children?: React.ReactNode;
  className?: string;
};

export const Box = <T extends ElementType = "div">({
  tag,
  children,
  className,
  ...rest
}: TBoxProps<T>) => {
  const Tag = tag || "div";
  return (
    <Tag {...rest} className={clsx(className)}>
      {children}
    </Tag>
  );
};
