// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { DeliveredProcedureOutlined as BaseDeliveredProcedureOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const DeliveredProcedureOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeliveredProcedureOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="delivered-procedure"
      svgString={svgHTMLString}
      {...props}
    />
  );
};