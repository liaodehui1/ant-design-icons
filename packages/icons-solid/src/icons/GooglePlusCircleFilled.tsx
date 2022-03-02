// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { GooglePlusCircleFilled as BaseGooglePlusCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const GooglePlusCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseGooglePlusCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="google-plus-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};