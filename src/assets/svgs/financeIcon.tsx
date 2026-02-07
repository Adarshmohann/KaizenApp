import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FinanceIcon = (props: any) => (
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
    <Path d="M12 20V10" />
    <Path d="M18 20V4" />
    <Path d="M6 20v-4" />
  </Svg>
);
export default FinanceIcon;
