// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PlayCircleFilled as BasePlayCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PlayCircleFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePlayCircleFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="play-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};