// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { OneToOneOutlined as BaseOneToOneOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const OneToOneOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseOneToOneOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="one-to-one"
      svgString={svgHTMLString}
      {...props}
    />
  );
};