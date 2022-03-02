// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SwapRightOutlined as BaseSwapRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SwapRightOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwapRightOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="swap-right"
      svgString={svgHTMLString}
      {...props}
    />
  );
};