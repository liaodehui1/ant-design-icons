// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CloudUploadOutlined as BaseCloudUploadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CloudUploadOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudUploadOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="cloud-upload"
      svgString={svgHTMLString}
      {...props}
    />
  );
};