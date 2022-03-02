// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { VideoCameraFilled as BaseVideoCameraFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const VideoCameraFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="video-camera"
      svgString={svgHTMLString}
      {...props}
    />
  );
};