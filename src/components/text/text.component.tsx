import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type TTextElement =  "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em" | "pre" | "a";

type TTextProps<T extends TTextElement> = Omit<ComponentPropsWithoutRef<T>, "as" | keyof ComponentPropsWithoutRef<"span">> & {
  tag?: T;
  children?: React.ReactNode;
  className?: string;
};

export const Text = <T extends TTextElement = "p">({
  tag,
  children,
  className,
  ...rest
}: TTextProps<T>) => {
  const Tag = tag || "p";
  return (
    <Tag {...rest} className={clsx(className)}>
      {children}
    </Tag>
  );
};