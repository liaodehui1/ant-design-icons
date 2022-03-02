// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FontColorsOutlined as BaseFontColorsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FontColorsOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFontColorsOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="font-colors"
      svgString={svgHTMLString}
      {...props}
    />
  );
};