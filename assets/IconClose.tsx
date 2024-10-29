import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function IconClose(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M13.5 4.5l-9 9m9 0l-9-9"
        stroke="#D2D6DB"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default IconClose;
