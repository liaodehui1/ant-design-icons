// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { RadiusBottomrightOutlined as BaseRadiusBottomrightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const RadiusBottomrightOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusBottomrightOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="radius-bottomright"
      svgString={svgHTMLString}
      {...props}
    />
  );
};