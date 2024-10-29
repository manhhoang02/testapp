import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function IconMessage(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M6 8.075V8m4 .075V8m4 .075V8m-4.26 5.826L5.564 18v-4.174H4a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v7.826a2 2 0 01-2 2H9.74z"
        stroke="#4D5761"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconMessage;
