// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { InsertRowRightOutlined as BaseInsertRowRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const InsertRowRightOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowRightOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="insert-row-right"
      svgString={svgHTMLString}
      {...props}
    />
  );
};