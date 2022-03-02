// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MenuFoldOutlined as BaseMenuFoldOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MenuFoldOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMenuFoldOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="menu-fold"
      svgString={svgHTMLString}
      {...props}
    />
  );
};