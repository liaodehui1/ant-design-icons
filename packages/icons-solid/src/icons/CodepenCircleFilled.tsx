// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CodepenCircleFilled as BaseCodepenCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CodepenCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="codepen-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};