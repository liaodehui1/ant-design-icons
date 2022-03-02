// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { InstagramFilled as BaseInstagramFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const InstagramFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseInstagramFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="instagram"
      svgString={svgHTMLString}
      {...props}
    />
  );
};