// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CopyrightCircleFilled as BaseCopyrightCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CopyrightCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="copyright-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};