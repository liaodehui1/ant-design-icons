// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CaretUpFilled as BaseCaretUpFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CaretUpFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretUpFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="caret-up"
      svgString={svgHTMLString}
      {...props}
    />
  );
};