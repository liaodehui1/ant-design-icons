// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { RadiusBottomleftOutlined as BaseRadiusBottomleftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const RadiusBottomleftOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusBottomleftOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="radius-bottomleft"
      svgString={svgHTMLString}
      {...props}
    />
  );
};