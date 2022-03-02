// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { NodeCollapseOutlined as BaseNodeCollapseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const NodeCollapseOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseNodeCollapseOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="node-collapse"
      svgString={svgHTMLString}
      {...props}
    />
  );
};