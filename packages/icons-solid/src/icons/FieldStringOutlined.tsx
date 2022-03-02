// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FieldStringOutlined as BaseFieldStringOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FieldStringOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldStringOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="field-string"
      svgString={svgHTMLString}
      {...props}
    />
  );
};