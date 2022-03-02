// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SlackSquareFilled as BaseSlackSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SlackSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlackSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="slack-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};