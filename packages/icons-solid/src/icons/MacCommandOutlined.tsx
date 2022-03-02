// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MacCommandOutlined as BaseMacCommandOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MacCommandOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMacCommandOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="mac-command"
      svgString={svgHTMLString}
      {...props}
    />
  );
};