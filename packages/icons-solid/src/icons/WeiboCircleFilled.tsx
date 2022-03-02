// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { WeiboCircleFilled as BaseWeiboCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const WeiboCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseWeiboCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="weibo-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};