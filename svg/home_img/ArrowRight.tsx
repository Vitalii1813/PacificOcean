import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowIcon: React.FC<IconProps> = ({ width = 20, height = 20, fill = "white" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_7_78)">
        <Path
          d="M9.99996 9.16667V6.66667L13.3333 10L9.99996 13.3333V10.8333H6.66663V9.16667H9.99996ZM9.99996 1.66667C14.6 1.66667 18.3333 5.40001 18.3333 10C18.3333 14.6 14.6 18.3333 9.99996 18.3333C5.39996 18.3333 1.66663 14.6 1.66663 10C1.66663 5.40001 5.39996 1.66667 9.99996 1.66667ZM9.99996 16.6667C13.6833 16.6667 16.6666 13.6833 16.6666 10C16.6666 6.31667 13.6833 3.33334 9.99996 3.33334C6.31663 3.33334 3.33329 6.31667 3.33329 10C3.33329 13.6833 6.31663 16.6667 9.99996 16.6667Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_7_78">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowIcon;