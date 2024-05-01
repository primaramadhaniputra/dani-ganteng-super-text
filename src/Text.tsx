import React, {CSSProperties} from "react";
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  currency?: {
    locales?: string | string[] | undefined;
    options?: Intl.NumberFormatOptions | undefined;
  };
  truncate?: {
    from: number;
    to: number;
  };
  highlight?: {
    highlightText: string[];
    highlightStyle?: CSSProperties;
  };
}

export const Text: React.FC<TextProps> = ({
  currency,
  truncate,
  highlight,
  ...rest
}) => {
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
  if (highlight && typeof rest.children === "string") {
    return (
      <p {...rest}>
        {handleHighlightText(
          rest.children,
          highlight.highlightText,
          highlight.highlightStyle
        )}
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

const handleHighlightText = (
  text: string,
  highlightText: string[],
  highlightStyle?: React.CSSProperties
) => {
  const regex = new RegExp(`(${highlightText.join("|")})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isHighlighted = highlightText.includes(part);
        return (
          <span key={index} style={isHighlighted ? highlightStyle : {}}>
            {part}{" "}
          </span>
        );
      })}
    </>
  );
};
