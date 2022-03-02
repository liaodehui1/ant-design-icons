// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { HeatMapOutlined as BaseHeatMapOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const HeatMapOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseHeatMapOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="heat-map"
      svgString={svgHTMLString}
      {...props}
    />
  );
};