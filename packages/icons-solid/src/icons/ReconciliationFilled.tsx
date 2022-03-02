// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ReconciliationFilled as BaseReconciliationFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ReconciliationFilled: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseReconciliationFilled, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="reconciliation"
      svgString={svgHTMLString}
      {...props}
    />
  );
};