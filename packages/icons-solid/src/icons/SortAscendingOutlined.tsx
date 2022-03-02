// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SortAscendingOutlined as BaseSortAscendingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SortAscendingOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSortAscendingOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="sort-ascending"
      svgString={svgHTMLString}
      {...props}
    />
  );
};