// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CloudSyncOutlined as BaseCloudSyncOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CloudSyncOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudSyncOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="cloud-sync"
      svgString={svgHTMLString}
      {...props}
    />
  );
};