// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { TransactionOutlined as BaseTransactionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const TransactionOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseTransactionOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="transaction"
      svgString={svgHTMLString}
      {...props}
    />
  );
};