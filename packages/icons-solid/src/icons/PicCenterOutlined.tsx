// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PicCenterOutlined as BasePicCenterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PicCenterOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePicCenterOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="pic-center"
      svgString={svgHTMLString}
      {...props}
    />
  );
};