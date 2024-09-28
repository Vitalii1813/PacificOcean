import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Save: React.FC = ({svgIconCustomSize, fill}: any) => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Path
      d="M6.25 7.75C6.25 6.34986 6.25 5.6498 6.52249 5.11503C6.76216 4.64461 7.14461 4.26216 7.61503 4.02249C8.1498 3.75 8.84986 3.75 10.25 3.75H19.75C21.1501 3.75 21.8503 3.75 22.385 4.02249C22.8554 4.26216 23.2379 4.64461 23.4775 5.11503C23.75 5.6498 23.75 6.34986 23.75 7.75V26.25L15 20L6.25 26.25V7.75Z"
      stroke="#7A9EA0"
      strokeWidth="2"
      strokeLinejoin="round"
      fill={fill}
    />
  </Svg>
);

export default Save;