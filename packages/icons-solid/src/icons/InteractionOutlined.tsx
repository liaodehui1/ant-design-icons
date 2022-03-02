// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { InteractionOutlined as BaseInteractionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const InteractionOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseInteractionOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="interaction"
      svgString={svgHTMLString}
      {...props}
    />
  );
};