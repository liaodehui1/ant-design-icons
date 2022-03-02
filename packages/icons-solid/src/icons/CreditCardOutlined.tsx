// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CreditCardOutlined as BaseCreditCardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CreditCardOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCreditCardOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="credit-card"
      svgString={svgHTMLString}
      {...props}
    />
  );
};