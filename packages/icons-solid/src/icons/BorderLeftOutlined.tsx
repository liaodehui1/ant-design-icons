// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BorderLeftOutlined as BaseBorderLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BorderLeftOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderLeftOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="border-left"
      svgString={svgHTMLString}
      {...props}
    />
  );
};