// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { LeftSquareTwoTone as BaseLeftSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const LeftSquareTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftSquareTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="left-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};