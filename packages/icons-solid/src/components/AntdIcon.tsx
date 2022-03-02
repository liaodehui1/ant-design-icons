import { Component, JSX, splitProps } from "solid-js";
import { classNames } from "../utils/classNames";
import { useInsertStyles } from "../utils/useInsertStyles";

export type BaseAntdIconProps = JSX.HTMLAttributes<HTMLSpanElement>;
interface AntdIconProps extends BaseAntdIconProps {
  svgName: string;
  svgString: string;
}

export const AntdIcon: Component<AntdIconProps> = (props) => {
  const [localProps, otherProps] = splitProps(props, [
    "svgName",
    "svgString",
    "className",
  ]);

  const prefixCls = "anticon";

  useInsertStyles();

  return (
    <span
      role="img"
      class={classNames(
        prefixCls,
        `${prefixCls}-${props.svgName}`,
        localProps.className
      )}
      aria-label={localProps.svgName}
      innerHTML={localProps.svgString}
      {...otherProps}
    />
  );
};
