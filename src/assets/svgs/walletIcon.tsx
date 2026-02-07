import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const WalletIcon = (props: any) => (
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
    <Path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
    <Path d="M21 12H17a2 2 0 0 0 0 4h4" />
  </Svg>
);
export default WalletIcon;
