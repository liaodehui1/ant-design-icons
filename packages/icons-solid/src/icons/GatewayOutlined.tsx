// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { GatewayOutlined as BaseGatewayOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const GatewayOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseGatewayOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="gateway"
      svgString={svgHTMLString}
      {...props}
    />
  );
};