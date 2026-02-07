import * as React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";

const CalendarIcon = (props: any) => (
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
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <Path d="M16 2v4" />
    <Path d="M8 2v4" />
    <Path d="M3 10h18" />
    <Circle cx="8" cy="14" r="0.5" fill="currentColor" />
    <Circle cx="12" cy="14" r="0.5" fill="currentColor" />
    <Circle cx="16" cy="14" r="0.5" fill="currentColor" />
    <Circle cx="8" cy="18" r="0.5" fill="currentColor" />
    <Circle cx="12" cy="18" r="0.5" fill="currentColor" />
    <Circle cx="16" cy="18" r="0.5" fill="currentColor" />
  </Svg>
);

export default CalendarIcon;
