import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const IconGoogle = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_4_10086)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.17192 11.9996C5.17192 11.2202 5.3013 10.4728 5.53248 9.77191L1.48811 6.68359C0.699859 8.28391 0.255859 10.0873 0.255859 11.9996C0.255859 13.9104 0.699484 15.7125 1.48642 17.3118L5.52855 14.2175C5.29961 13.5198 5.17192 12.7753 5.17192 11.9996Z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2732 4.90912C13.9665 4.90912 15.496 5.50913 16.6977 6.49088L20.1934 3C18.0632 1.14544 15.3321 0 12.2732 0C7.52422 0 3.44272 2.71575 1.4884 6.684L5.53259 9.77231C6.46447 6.94369 9.12078 4.90912 12.2732 4.90912Z"
        fill="#EA4335"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2731 19.0898C9.12084 19.0898 6.46453 17.0552 5.53266 14.2266L1.48828 17.3143C3.44259 21.2831 7.52409 23.9989 12.2731 23.9989C15.2041 23.9989 18.0025 22.9581 20.1027 21.0081L16.2638 18.0403C15.1807 18.7226 13.8166 19.0898 12.2731 19.0898Z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7441 11.9982C23.7441 11.289 23.6348 10.5253 23.4709 9.81641H12.2734V14.4527H18.7189C18.3966 16.0335 17.5195 17.2487 16.2642 18.0396L20.1031 21.0073C22.3092 18.9598 23.7441 15.9096 23.7441 11.9982Z"
        fill="#4285F4"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_10086">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconGoogle