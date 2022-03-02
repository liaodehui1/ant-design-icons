// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MinusCircleOutlined as BaseMinusCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MinusCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusCircleOutlined, {
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