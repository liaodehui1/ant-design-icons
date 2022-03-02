// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SplitCellsOutlined as BaseSplitCellsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SplitCellsOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSplitCellsOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="split-cells"
      svgString={svgHTMLString}
      {...props}
    />
  );
};