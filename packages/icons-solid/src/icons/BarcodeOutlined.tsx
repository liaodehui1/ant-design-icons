// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BarcodeOutlined as BaseBarcodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BarcodeOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBarcodeOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="barcode"
      svgString={svgHTMLString}
      {...props}
    />
  );
};