// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { VerifiedOutlined as BaseVerifiedOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const VerifiedOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerifiedOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="verified"
      svgString={svgHTMLString}
      {...props}
    />
  );
};