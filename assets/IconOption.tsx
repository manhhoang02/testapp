import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const IconOption = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M4.99998 8.33325C4.08331 8.33325 3.33331 9.08325 3.33331 9.99992C3.33331 10.9166 4.08331 11.6666 4.99998 11.6666C5.91665 11.6666 6.66665 10.9166 6.66665 9.99992C6.66665 9.08325 5.91665 8.33325 4.99998 8.33325ZM15 8.33325C14.0833 8.33325 13.3333 9.08325 13.3333 9.99992C13.3333 10.9166 14.0833 11.6666 15 11.6666C15.9166 11.6666 16.6666 10.9166 16.6666 9.99992C16.6666 9.08325 15.9166 8.33325 15 8.33325ZM9.99998 8.33325C9.08331 8.33325 8.33331 9.08325 8.33331 9.99992C8.33331 10.9166 9.08331 11.6666 9.99998 11.6666C10.9166 11.6666 11.6666 10.9166 11.6666 9.99992C11.6666 9.08325 10.9166 8.33325 9.99998 8.33325Z"
      fill="#121212"
    />
  </Svg>
);
export default IconOption;