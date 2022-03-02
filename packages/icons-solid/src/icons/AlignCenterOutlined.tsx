// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AlignCenterOutlined as BaseAlignCenterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AlignCenterOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlignCenterOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="align-center"
      svgString={svgHTMLString}
      {...props}
    />
  );
};