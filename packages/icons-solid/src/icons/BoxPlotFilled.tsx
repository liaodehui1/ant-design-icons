// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BoxPlotFilled as BaseBoxPlotFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BoxPlotFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBoxPlotFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="box-plot"
      svgString={svgHTMLString}
      {...props}
    />
  );
};