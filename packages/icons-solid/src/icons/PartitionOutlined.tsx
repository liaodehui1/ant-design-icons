// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PartitionOutlined as BasePartitionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PartitionOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePartitionOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="partition"
      svgString={svgHTMLString}
      {...props}
    />
  );
};