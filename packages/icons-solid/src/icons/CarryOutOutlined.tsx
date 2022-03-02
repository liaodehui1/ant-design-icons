// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CarryOutOutlined as BaseCarryOutOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CarryOutOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarryOutOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="carry-out"
      svgString={svgHTMLString}
      {...props}
    />
  );
};