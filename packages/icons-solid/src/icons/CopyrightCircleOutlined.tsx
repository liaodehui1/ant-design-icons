// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CopyrightCircleOutlined as BaseCopyrightCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CopyrightCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightCircleOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="copyright-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};