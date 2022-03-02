// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MinusCircleTwoTone as BaseMinusCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MinusCircleTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusCircleTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="minus-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};