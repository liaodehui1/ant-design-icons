// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ProjectTwoTone as BaseProjectTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ProjectTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseProjectTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="project"
      svgString={svgHTMLString}
      {...props}
    />
  );
};