// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { VideoCameraAddOutlined as BaseVideoCameraAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const VideoCameraAddOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraAddOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="video-camera-add"
      svgString={svgHTMLString}
      {...props}
    />
  );
};