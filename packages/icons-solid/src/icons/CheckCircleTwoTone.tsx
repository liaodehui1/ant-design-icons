// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CheckCircleTwoTone as BaseCheckCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CheckCircleTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckCircleTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="check-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};