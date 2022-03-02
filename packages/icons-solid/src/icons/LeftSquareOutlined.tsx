// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { LeftSquareOutlined as BaseLeftSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const LeftSquareOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftSquareOutlined, {
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