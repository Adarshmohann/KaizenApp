import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const MailIcon = (props: any) => (
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
    <Rect width="20" height="16" x="2" y="4" rx="2" />
    <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

export default MailIcon;
