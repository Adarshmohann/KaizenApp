import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CardIcon = (props: any) => (
  <Svg
    width={props?.width ?? 21}
    height={props?.height ?? 17}
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.625 4.375H20.125M0.625 5.125H20.125M3.625 10.375H9.625M3.625 12.625H6.625M2.875 15.625H17.875C18.4717 15.625 19.044 15.3879 19.466 14.966C19.8879 14.544 20.125 13.9717 20.125 13.375V2.875C20.125 2.27826 19.8879 1.70597 19.466 1.28401C19.044 0.862053 18.4717 0.625 17.875 0.625H2.875C2.27826 0.625 1.70597 0.862053 1.28401 1.28401C0.862053 1.70597 0.625 2.27826 0.625 2.875V13.375C0.625 13.9717 0.862053 14.544 1.28401 14.966C1.70597 15.3879 2.27826 15.625 2.875 15.625Z"
      stroke={props?.stroke ?? "#346AFD"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CardIcon;
