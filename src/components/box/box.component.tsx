import { ComponentProps, ElementType } from "react";
import clsx from "clsx";

type BoxProps<E extends ElementType> = Omit<ComponentProps<E>, "tag"> & {
  tag?: E;
  cltagsName?: string;
  children?: React.ReactNode;
};

export const Box = <E extends ElementType = "div">({
  tag,
  children,
  className,
  ...props
}: BoxProps<E>) => {
  const Tag = tag || "div";
  return (
    <Tag {...props} className={clsx(className)}>
      {children}
    </Tag>
  );
};
