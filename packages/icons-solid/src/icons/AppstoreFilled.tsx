// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AppstoreFilled as BaseAppstoreFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AppstoreFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppstoreFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="appstore"
      svgString={svgHTMLString}
      {...props}
    />
  );
};