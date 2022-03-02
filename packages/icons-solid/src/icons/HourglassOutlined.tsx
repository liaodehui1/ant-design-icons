// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { HourglassOutlined as BaseHourglassOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const HourglassOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseHourglassOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="hourglass"
      svgString={svgHTMLString}
      {...props}
    />
  );
};