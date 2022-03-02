// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ShoppingCartOutlined as BaseShoppingCartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ShoppingCartOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingCartOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="shopping-cart"
      svgString={svgHTMLString}
      {...props}
    />
  );
};