// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FilePdfOutlined as BaseFilePdfOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const FilePdfOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePdfOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="file-pdf"
      svgString={svgHTMLString}
      {...props}
    />
  );
};