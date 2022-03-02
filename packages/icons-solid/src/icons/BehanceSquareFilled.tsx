// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { BehanceSquareFilled as BaseBehanceSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const BehanceSquareFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseBehanceSquareFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="behance-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};