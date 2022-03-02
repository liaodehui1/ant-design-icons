// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AlibabaOutlined as BaseAlibabaOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AlibabaOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlibabaOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="alibaba"
      svgString={svgHTMLString}
      {...props}
    />
  );
};