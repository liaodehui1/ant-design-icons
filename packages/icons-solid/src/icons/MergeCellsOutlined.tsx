// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { MergeCellsOutlined as BaseMergeCellsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const MergeCellsOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseMergeCellsOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="merge-cells"
      svgString={svgHTMLString}
      {...props}
    />
  );
};