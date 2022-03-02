// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CaretLeftFilled as BaseCaretLeftFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CaretLeftFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretLeftFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="caret-left"
      svgString={svgHTMLString}
      {...props}
    />
  );
};