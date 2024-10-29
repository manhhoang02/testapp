import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const IconPlus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12.0001 4.80005L12 19.2M19.2 12L4.80005 12"
      stroke="#0D121C"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
export default IconPlus;
