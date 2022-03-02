// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CloudServerOutlined as BaseCloudServerOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CloudServerOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudServerOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="cloud-server"
      svgString={svgHTMLString}
      {...props}
    />
  );
};