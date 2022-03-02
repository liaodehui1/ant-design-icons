// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CalculatorTwoTone as BaseCalculatorTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CalculatorTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalculatorTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="calculator"
      svgString={svgHTMLString}
      {...props}
    />
  );
};