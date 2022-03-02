// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { TwitterCircleFilled as BaseTwitterCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const TwitterCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseTwitterCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="twitter-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};