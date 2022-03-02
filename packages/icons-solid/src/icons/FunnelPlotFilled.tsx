// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunnelPlotFilled as BaseFunnelPlotFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FunnelPlotFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFunnelPlotFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="funnel-plot"
      svgString={svgHTMLString}
      {...props}
    />
  );
};