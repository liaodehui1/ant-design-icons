// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PropertySafetyOutlined as BasePropertySafetyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PropertySafetyOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePropertySafetyOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="property-safety"
      svgString={svgHTMLString}
      {...props}
    />
  );
};