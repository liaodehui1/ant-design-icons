// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AntCloudOutlined as BaseAntCloudOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AntCloudOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAntCloudOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="ant-cloud"
      svgString={svgHTMLString}
      {...props}
    />
  );
};