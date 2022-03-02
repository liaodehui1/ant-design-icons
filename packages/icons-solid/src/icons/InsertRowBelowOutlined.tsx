// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { InsertRowBelowOutlined as BaseInsertRowBelowOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const InsertRowBelowOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowBelowOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="insert-row-below"
      svgString={svgHTMLString}
      {...props}
    />
  );
};