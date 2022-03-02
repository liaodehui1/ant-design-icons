// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FieldBinaryOutlined as BaseFieldBinaryOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FieldBinaryOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFieldBinaryOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="field-binary"
      svgString={svgHTMLString}
      {...props}
    />
  );
};