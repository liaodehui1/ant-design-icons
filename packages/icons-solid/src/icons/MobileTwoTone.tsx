// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MobileTwoTone as BaseMobileTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MobileTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMobileTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="mobile"
      svgString={svgHTMLString}
      {...props}
    />
  );
};