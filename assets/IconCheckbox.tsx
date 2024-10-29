import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconCheckbox = (props: SvgProps) => (
  <Svg
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="#E5E7EB"
    {...props}
  >
    <Path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </Svg>
);
export default IconCheckbox;
