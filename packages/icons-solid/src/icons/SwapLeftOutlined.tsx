// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SwapLeftOutlined as BaseSwapLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SwapLeftOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwapLeftOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="swap-left"
      svgString={svgHTMLString}
      {...props}
    />
  );
};