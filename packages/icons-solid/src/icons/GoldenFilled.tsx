// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { GoldenFilled as BaseGoldenFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const GoldenFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoldenFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="golden"
      svgString={svgHTMLString}
      {...props}
    />
  );
};