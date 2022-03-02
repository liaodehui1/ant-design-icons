// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DropboxCircleFilled as BaseDropboxCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DropboxCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDropboxCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="dropbox-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};