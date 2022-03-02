// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { LinkedinOutlined as BaseLinkedinOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const LinkedinOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseLinkedinOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="linkedin"
      svgString={svgHTMLString}
      {...props}
    />
  );
};