// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PercentageOutlined as BasePercentageOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PercentageOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePercentageOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="percentage"
      svgString={svgHTMLString}
      {...props}
    />
  );
};