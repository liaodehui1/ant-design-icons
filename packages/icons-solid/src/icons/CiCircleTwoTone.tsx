// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CiCircleTwoTone as BaseCiCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CiCircleTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiCircleTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="ci-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};