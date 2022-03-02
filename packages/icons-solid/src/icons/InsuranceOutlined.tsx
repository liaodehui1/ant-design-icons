// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { InsuranceOutlined as BaseInsuranceOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const InsuranceOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsuranceOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="insurance"
      svgString={svgHTMLString}
      {...props}
    />
  );
};