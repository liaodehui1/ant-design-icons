// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DingtalkCircleFilled as BaseDingtalkCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DingtalkCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingtalkCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dingtalk-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};