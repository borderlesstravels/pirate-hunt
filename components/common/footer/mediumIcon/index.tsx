import React from "react";

interface Props {
  className?: string;
}

const MediumIcon = ({ className }: Props) => {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect x="4" y="4" width="51" height="49" fill="white" />
      <g filter="url(#filter0_i_423_482)">
        <rect width="59" height="59" fill="url(#pattern0_423_482)" />
      </g>
      <defs>
        <filter
          id="filter0_i_423_482"
          x="0"
          y="0"
          width="59"
          height="159"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="100"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_423_482"
          />
          <feOffset dy="100" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0823529 0 0 0 0 0.168627 0 0 0 0 0.290196 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_423_482"
          />
        </filter>
        <pattern
          id="pattern0_423_482"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_423_482" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_423_482"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MediumIcon;