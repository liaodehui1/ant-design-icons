// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SafetyCertificateFilled as BaseSafetyCertificateFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SafetyCertificateFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSafetyCertificateFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="safety-certificate"
      svgString={svgHTMLString}
      {...props}
    />
  );
};