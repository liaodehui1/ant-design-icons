// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ContainerFilled as BaseContainerFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ContainerFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseContainerFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="container"
      svgString={svgHTMLString}
      {...props}
    />
  );
};