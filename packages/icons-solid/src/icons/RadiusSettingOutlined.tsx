// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { RadiusSettingOutlined as BaseRadiusSettingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const RadiusSettingOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusSettingOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="radius-setting"
      svgString={svgHTMLString}
      {...props}
    />
  );
};