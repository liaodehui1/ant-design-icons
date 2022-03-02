// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CaretDownOutlined as BaseCaretDownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CaretDownOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretDownOutlined, {
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