// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DeleteTwoTone as BaseDeleteTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DeleteTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeleteTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="delete"
      svgString={svgHTMLString}
      {...props}
    />
  );
};