// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FormatPainterFilled as BaseFormatPainterFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FormatPainterFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFormatPainterFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="format-painter"
      svgString={svgHTMLString}
      {...props}
    />
  );
};