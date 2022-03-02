// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DribbbleCircleFilled as BaseDribbbleCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DribbbleCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dribbble-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};