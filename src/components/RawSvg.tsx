import React from "react";

/**
 * Injects a raw inline-SVG string into the DOM so that CSS class selectors
 * inside the markup (e.g. the hero's hover animation targeting `.main-svg-el`)
 * keep working exactly like on the original site.
 */
export default function RawSvg({
  svg,
  className,
  style,
  as: Tag = "span",
}: {
  svg: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "span" | "div";
}) {
  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
