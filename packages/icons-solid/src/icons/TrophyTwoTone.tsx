// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { TrophyTwoTone as BaseTrophyTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const TrophyTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrophyTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="trophy"
      svgString={svgHTMLString}
      {...props}
    />
  );
};