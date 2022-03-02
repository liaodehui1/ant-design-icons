// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CaretRightOutlined as BaseCaretRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CaretRightOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretRightOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="caret-right"
      svgString={svgHTMLString}
      {...props}
    />
  );
};