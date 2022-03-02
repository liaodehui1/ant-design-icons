// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FolderViewOutlined as BaseFolderViewOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FolderViewOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderViewOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="folder-view"
      svgString={svgHTMLString}
      {...props}
    />
  );
};