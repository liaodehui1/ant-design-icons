// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { IeSquareFilled as BaseIeSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const IeSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseIeSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="ie-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};