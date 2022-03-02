// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CheckCircleOutlined as BaseCheckCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CheckCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckCircleOutlined, {
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