// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { RocketTwoTone as BaseRocketTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const RocketTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseRocketTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="rocket"
      svgString={svgHTMLString}
      {...props}
    />
  );
};