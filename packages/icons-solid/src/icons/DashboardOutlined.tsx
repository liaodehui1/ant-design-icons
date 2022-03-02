// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DashboardOutlined as BaseDashboardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DashboardOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDashboardOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dashboard"
      svgString={svgHTMLString}
      {...props}
    />
  );
};