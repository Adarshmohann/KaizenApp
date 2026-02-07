import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SmileIcon = (props: any) => (
  <Svg
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    viewBox="0 0 24 24"
    fill={props?.fill ?? "none"}
    stroke={props?.stroke ?? "currentColor"}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Circle cx="12" cy="12" r="10" />
    <Path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <Path d="M9 9h.01" />
    <Path d="M15 9h.01" />
  </Svg>
);

export default SmileIcon;
