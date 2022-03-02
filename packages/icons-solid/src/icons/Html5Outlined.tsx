// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Html5Outlined as BaseHtml5Outlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const Html5Outlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseHtml5Outlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="html5"
      svgString={svgHTMLString}
      {...props}
    />
  );
};