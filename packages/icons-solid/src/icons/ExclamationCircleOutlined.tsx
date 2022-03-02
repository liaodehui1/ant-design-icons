// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ExclamationCircleOutlined as BaseExclamationCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ExclamationCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseExclamationCircleOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="exclamation-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};