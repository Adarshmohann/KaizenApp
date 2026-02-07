import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const CardIcon = (props: any) => (
  <Svg
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.stroke ?? "currentColor"}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <Path d="M2 10h20" />
  </Svg>
);
export default CardIcon;
