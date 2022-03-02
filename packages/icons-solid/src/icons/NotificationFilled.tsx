// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { NotificationFilled as BaseNotificationFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const NotificationFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseNotificationFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="notification"
      svgString={svgHTMLString}
      {...props}
    />
  );
};