// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ExperimentTwoTone as BaseExperimentTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ExperimentTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseExperimentTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="experiment"
      svgString={svgHTMLString}
      {...props}
    />
  );
};