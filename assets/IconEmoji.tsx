import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function IconEmoji(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M12.917 9.167a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7.083 9.167a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fill="#4D5761"
      />
      <Path
        d="M10 13.333c-1.233 0-2.292-.675-2.875-1.666H5.733a4.58 4.58 0 008.534 0h-1.392A3.32 3.32 0 0110 13.333zM9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S14.6 1.667 9.992 1.667zm.008 15A6.665 6.665 0 013.333 10 6.665 6.665 0 0110 3.333 6.665 6.665 0 0116.667 10 6.665 6.665 0 0110 16.667z"
        fill="#4D5761"
      />
    </Svg>
  );
}

export default IconEmoji;
