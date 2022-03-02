// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { UsergroupDeleteOutlined as BaseUsergroupDeleteOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const UsergroupDeleteOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsergroupDeleteOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="usergroup-delete"
      svgString={svgHTMLString}
      {...props}
    />
  );
};