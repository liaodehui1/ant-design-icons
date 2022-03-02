// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PaperClipOutlined as BasePaperClipOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PaperClipOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePaperClipOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="paper-clip"
      svgString={svgHTMLString}
      {...props}
    />
  );
};