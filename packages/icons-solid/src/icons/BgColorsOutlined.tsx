// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BgColorsOutlined as BaseBgColorsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BgColorsOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBgColorsOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="bg-colors"
      svgString={svgHTMLString}
      {...props}
    />
  );
};