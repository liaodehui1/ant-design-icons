// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Loading3QuartersOutlined as BaseLoading3QuartersOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const Loading3QuartersOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLoading3QuartersOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="loading-3-quarters"
      svgString={svgHTMLString}
      {...props}
    />
  );
};