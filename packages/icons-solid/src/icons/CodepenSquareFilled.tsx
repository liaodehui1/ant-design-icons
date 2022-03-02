// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CodepenSquareFilled as BaseCodepenSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CodepenSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="codepen-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};