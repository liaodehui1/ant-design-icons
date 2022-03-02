// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SmallDashOutlined as BaseSmallDashOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SmallDashOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSmallDashOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="small-dash"
      svgString={svgHTMLString}
      {...props}
    />
  );
};