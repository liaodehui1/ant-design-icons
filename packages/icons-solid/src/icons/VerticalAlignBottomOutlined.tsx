// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { VerticalAlignBottomOutlined as BaseVerticalAlignBottomOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const VerticalAlignBottomOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalAlignBottomOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="vertical-align-bottom"
      svgString={svgHTMLString}
      {...props}
    />
  );
};