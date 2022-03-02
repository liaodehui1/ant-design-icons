// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DribbbleSquareFilled as BaseDribbbleSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DribbbleSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dribbble-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};