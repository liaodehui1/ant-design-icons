// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MinusSquareTwoTone as BaseMinusSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MinusSquareTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusSquareTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="minus-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};