// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ZoomInOutlined as BaseZoomInOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ZoomInOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseZoomInOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="zoom-in"
      svgString={svgHTMLString}
      {...props}
    />
  );
};