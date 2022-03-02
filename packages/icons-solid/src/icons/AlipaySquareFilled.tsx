// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AlipaySquareFilled as BaseAlipaySquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AlipaySquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlipaySquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="alipay-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};