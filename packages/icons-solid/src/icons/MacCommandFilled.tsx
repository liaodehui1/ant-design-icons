// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MacCommandFilled as BaseMacCommandFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MacCommandFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMacCommandFilled, {
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