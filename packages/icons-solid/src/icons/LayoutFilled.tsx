// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { LayoutFilled as BaseLayoutFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const LayoutFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLayoutFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="layout"
      svgString={svgHTMLString}
      {...props}
    />
  );
};