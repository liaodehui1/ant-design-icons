// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { UngroupOutlined as BaseUngroupOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const UngroupOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseUngroupOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="ungroup"
      svgString={svgHTMLString}
      {...props}
    />
  );
};