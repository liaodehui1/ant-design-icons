// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PieChartFilled as BasePieChartFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PieChartFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePieChartFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="pie-chart"
      svgString={svgHTMLString}
      {...props}
    />
  );
};