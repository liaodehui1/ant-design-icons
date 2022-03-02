// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { TaobaoCircleOutlined as BaseTaobaoCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const TaobaoCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseTaobaoCircleOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="taobao-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};