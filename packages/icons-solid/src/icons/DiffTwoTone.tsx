// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DiffTwoTone as BaseDiffTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DiffTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDiffTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="diff"
      svgString={svgHTMLString}
      {...props}
    />
  );
};