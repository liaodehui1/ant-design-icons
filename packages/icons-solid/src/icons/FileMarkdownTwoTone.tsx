// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FileMarkdownTwoTone as BaseFileMarkdownTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FileMarkdownTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileMarkdownTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="file-markdown"
      svgString={svgHTMLString}
      {...props}
    />
  );
};