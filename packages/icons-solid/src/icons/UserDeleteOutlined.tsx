// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { UserDeleteOutlined as BaseUserDeleteOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const UserDeleteOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseUserDeleteOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="user-delete"
      svgString={svgHTMLString}
      {...props}
    />
  );
};