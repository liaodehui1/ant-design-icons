// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ArrowUpOutlined as BaseArrowUpOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ArrowUpOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowUpOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="arrow-up"
      svgString={svgHTMLString}
      {...props}
    />
  );
};