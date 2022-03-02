// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MoneyCollectFilled as BaseMoneyCollectFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MoneyCollectFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMoneyCollectFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="money-collect"
      svgString={svgHTMLString}
      {...props}
    />
  );
};