// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PullRequestOutlined as BasePullRequestOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PullRequestOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePullRequestOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="pull-request"
      svgString={svgHTMLString}
      {...props}
    />
  );
};