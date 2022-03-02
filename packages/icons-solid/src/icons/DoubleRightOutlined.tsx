// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DoubleRightOutlined as BaseDoubleRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DoubleRightOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDoubleRightOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="double-right"
      svgString={svgHTMLString}
      {...props}
    />
  );
};