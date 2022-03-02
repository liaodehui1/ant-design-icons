// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { EyeInvisibleOutlined as BaseEyeInvisibleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const EyeInvisibleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeInvisibleOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="eye-invisible"
      svgString={svgHTMLString}
      {...props}
    />
  );
};