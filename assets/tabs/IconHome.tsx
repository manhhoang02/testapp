import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function IconHome(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M7.5 17.5v-5.706c0-.525.448-.951 1-.951h3c.552 0 1 .426 1 .951V17.5M9.42 2.676l-6.5 4.396a.938.938 0 00-.42.775v8.226c0 .788.672 1.427 1.5 1.427h12c.828 0 1.5-.639 1.5-1.427V7.847a.938.938 0 00-.42-.775l-6.5-4.396a1.042 1.042 0 00-1.16 0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default IconHome;
