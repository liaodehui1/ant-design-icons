// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { ReconciliationTwoTone as BaseReconciliationTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const ReconciliationTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseReconciliationTwoTone, {
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