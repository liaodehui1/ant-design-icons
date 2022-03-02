// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { LaptopOutlined as BaseLaptopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const LaptopOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLaptopOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="laptop"
      svgString={svgHTMLString}
      {...props}
    />
  );
};