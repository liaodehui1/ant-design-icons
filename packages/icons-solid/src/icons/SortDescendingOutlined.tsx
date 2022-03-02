// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SortDescendingOutlined as BaseSortDescendingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const SortDescendingOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseSortDescendingOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="sort-descending"
      svgString={svgHTMLString}
      {...props}
    />
  );
};