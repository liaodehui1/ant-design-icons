// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BorderTopOutlined as BaseBorderTopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BorderTopOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderTopOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="border-top"
      svgString={svgHTMLString}
      {...props}
    />
  );
};