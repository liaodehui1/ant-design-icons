// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SkinFilled as BaseSkinFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SkinFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkinFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="skin"
      svgString={svgHTMLString}
      {...props}
    />
  );
};