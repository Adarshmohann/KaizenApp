import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const StatsIcon = (props: any) => (
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
    <Path d="M12 6v6l4 2" />
  </Svg>
);
export default StatsIcon;
