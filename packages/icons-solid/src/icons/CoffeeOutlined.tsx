// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CoffeeOutlined as BaseCoffeeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CoffeeOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCoffeeOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="coffee"
      svgString={svgHTMLString}
      {...props}
    />
  );
};