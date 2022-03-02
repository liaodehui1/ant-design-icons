// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DingtalkSquareFilled as BaseDingtalkSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DingtalkSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingtalkSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dingtalk-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};