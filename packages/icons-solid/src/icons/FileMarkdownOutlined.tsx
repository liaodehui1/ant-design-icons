// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FileMarkdownOutlined as BaseFileMarkdownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FileMarkdownOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileMarkdownOutlined, {
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