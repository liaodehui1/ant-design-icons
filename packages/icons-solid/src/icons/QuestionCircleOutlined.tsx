// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { QuestionCircleOutlined as BaseQuestionCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const QuestionCircleOutlined: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(BaseQuestionCircleOutlined, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="question-circle"
      svgString={svgHTMLString}
      {...props}
    />
  );
};