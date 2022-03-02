// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ArrowLeftOutlined as BaseArrowLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ArrowLeftOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowLeftOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="arrow-left"
      svgString={svgHTMLString}
      {...props}
    />
  );
};