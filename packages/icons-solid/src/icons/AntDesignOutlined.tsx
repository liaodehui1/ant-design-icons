// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { AntDesignOutlined as BaseAntDesignOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const AntDesignOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseAntDesignOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="ant-design"
      svgString={svgHTMLString}
      {...props}
    />
  );
};