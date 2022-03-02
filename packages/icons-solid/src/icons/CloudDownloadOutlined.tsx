// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CloudDownloadOutlined as BaseCloudDownloadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CloudDownloadOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudDownloadOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="cloud-download"
      svgString={svgHTMLString}
      {...props}
    />
  );
};