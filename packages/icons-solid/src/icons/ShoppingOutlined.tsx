// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ShoppingOutlined as BaseShoppingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ShoppingOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="shopping"
      svgString={svgHTMLString}
      {...props}
    />
  );
};