// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { PlayCircleTwoTone as BasePlayCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const PlayCircleTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BasePlayCircleTwoTone, {
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