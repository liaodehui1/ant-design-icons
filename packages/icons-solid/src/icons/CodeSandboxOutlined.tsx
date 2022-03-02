// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CodeSandboxOutlined as BaseCodeSandboxOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CodeSandboxOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodeSandboxOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="code-sandbox"
      svgString={svgHTMLString}
      {...props}
    />
  );
};