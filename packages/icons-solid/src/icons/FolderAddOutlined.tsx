// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FolderAddOutlined as BaseFolderAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FolderAddOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderAddOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="folder-add"
      svgString={svgHTMLString}
      {...props}
    />
  );
};