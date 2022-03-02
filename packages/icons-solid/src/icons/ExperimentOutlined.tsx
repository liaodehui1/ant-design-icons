// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ExperimentOutlined as BaseExperimentOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ExperimentOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseExperimentOutlined, {
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