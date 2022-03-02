// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CaretDownFilled as BaseCaretDownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CaretDownFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretDownFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="caret-down"
      svgString={svgHTMLString}
      {...props}
    />
  );
};