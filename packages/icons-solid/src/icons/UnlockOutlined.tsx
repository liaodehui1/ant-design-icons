// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { UnlockOutlined as BaseUnlockOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const UnlockOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnlockOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="unlock"
      svgString={svgHTMLString}
      {...props}
    />
  );
};