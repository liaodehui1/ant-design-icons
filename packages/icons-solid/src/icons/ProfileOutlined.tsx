// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ProfileOutlined as BaseProfileOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ProfileOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseProfileOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="profile"
      svgString={svgHTMLString}
      {...props}
    />
  );
};