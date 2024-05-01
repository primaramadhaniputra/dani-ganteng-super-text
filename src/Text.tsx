import React from "react";
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  currency?: {
    locales?: string | string[] | undefined;
    options?: Intl.NumberFormatOptions | undefined;
  };
  truncate?: {
    from: number;
    to: number;
  };
}

export const Text: React.FC<TextProps> = ({currency, truncate, ...rest}) => {
  if (
    currency &&
    Boolean(Number(rest.children) === 0 ? 1 : Number(rest.children))
  ) {
    return (
      <p {...rest}>
        {handleCurrency(
          Number(rest.children),
          currency.locales,
          currency.options
        )}
      </p>
    );
  }
  if (truncate) {
    return (
      <p {...rest}>
        {`${rest.children?.toString().slice(truncate.from, truncate.to)}${
          rest.children && rest.children?.toString().length > truncate.to
            ? "..."
            : ""
        }`}
      </p>
    );
  }
  return <p {...rest}>{rest.children}</p>;
};

const handleCurrency = (
  value: number,
  locales?: string | string[] | undefined,
  options?: Intl.NumberFormatOptions | undefined
) => {
  const formatter = new Intl.NumberFormat(locales, options);
  return `${formatter.format(value)}`;
};
