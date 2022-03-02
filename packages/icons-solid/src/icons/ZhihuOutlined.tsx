// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ZhihuOutlined as BaseZhihuOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ZhihuOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseZhihuOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="zhihu"
      svgString={svgHTMLString}
      {...props}
    />
  );
};