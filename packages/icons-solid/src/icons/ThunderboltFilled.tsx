// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ThunderboltFilled as BaseThunderboltFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ThunderboltFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseThunderboltFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="thunderbolt"
      svgString={svgHTMLString}
      {...props}
    />
  );
};