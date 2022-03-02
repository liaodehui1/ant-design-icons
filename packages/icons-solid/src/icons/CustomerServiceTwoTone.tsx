// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { CustomerServiceTwoTone as BaseCustomerServiceTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const CustomerServiceTwoTone: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseCustomerServiceTwoTone, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="customer-service"
      svgString={svgHTMLString}
      {...props}
    />
  );
};