// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DribbbleSquareOutlined as BaseDribbbleSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DribbbleSquareOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleSquareOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dribbble-square"
      svgString={svgHTMLString}
      {...props}
    />
  );
};