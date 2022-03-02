// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SwitcherFilled as BaseSwitcherFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SwitcherFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwitcherFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="switcher"
      svgString={svgHTMLString}
      {...props}
    />
  );
};