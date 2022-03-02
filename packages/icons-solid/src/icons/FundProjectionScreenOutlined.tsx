// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FundProjectionScreenOutlined as BaseFundProjectionScreenOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FundProjectionScreenOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundProjectionScreenOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="fund-projection-screen"
      svgString={svgHTMLString}
      {...props}
    />
  );
};