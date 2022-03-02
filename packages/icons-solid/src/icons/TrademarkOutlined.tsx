// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { TrademarkOutlined as BaseTrademarkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const TrademarkOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrademarkOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="trademark"
      svgString={svgHTMLString}
      {...props}
    />
  );
};