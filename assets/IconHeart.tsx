import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface Props extends SvgProps {
  active?: boolean;
}

const IconHeart = (props: Props) => {
  const fill = props.active ? '#FF2D55' : 'transparent';
  const stroke = props.active ? 'transparent' : '#4D5761';
  return (
    <Svg width={24} height={24} viewBox="0 0 20 20" fill={fill} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.172 5.17208C3.92211 4.4222 4.93934 4.00093 6 4.00093C7.06066 4.00093 8.07789 4.4222 8.828 5.17208L10 6.34308L11.172 5.17208C11.541 4.79004 11.9824 4.48531 12.4704 4.27567C12.9584 4.06604 13.4833 3.95569 14.0144 3.95108C14.5455 3.94646 15.0722 4.04767 15.5638 4.24879C16.0554 4.44992 16.502 4.74693 16.8776 5.1225C17.2531 5.49807 17.5502 5.94468 17.7513 6.43626C17.9524 6.92785 18.0536 7.45457 18.049 7.98569C18.0444 8.5168 17.934 9.04168 17.7244 9.5297C17.5148 10.0177 17.21 10.4591 16.828 10.8281L10 17.6571L3.172 10.8281C2.42212 10.078 2.00085 9.06074 2.00085 8.00008C2.00085 6.93942 2.42212 5.92219 3.172 5.17208V5.17208Z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default IconHeart;
