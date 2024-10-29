import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function IconArrowLeft(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M15.705 7.41L14.295 6l-6 6 6 6 1.41-1.41-4.58-4.59 4.58-4.59z"
        fill="#4D5761"
      />
    </Svg>
  );
}

export default IconArrowLeft;
