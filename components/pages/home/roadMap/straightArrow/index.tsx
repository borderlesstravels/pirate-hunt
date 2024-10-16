import React from "react";

interface Props {
  className?: string;
}

const StraightArrow = ({ className }: Props) => {
  return (
    <svg
      width="26"
      height="45"
      viewBox="0 0 26 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.2568 44.4906C23.5202 44.5735 23.801 44.4273 23.8839 44.1639L25.2359 39.8718C25.3189 39.6084 25.1726 39.3276 24.9092 39.2446C24.6458 39.1617 24.3651 39.3079 24.2821 39.5713L23.0804 43.3865L19.2652 42.1848C19.0018 42.1018 18.721 42.2481 18.638 42.5115C18.5551 42.7749 18.7013 43.0556 18.9647 43.1386L23.2568 44.4906ZM0.55656 1.231L22.9636 44.2447L23.8505 43.7827L1.44344 0.769L0.55656 1.231Z"
        fill="url(#paint0_linear_261_995)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_261_995"
          x1="0.55656"
          y1="1.231"
          x2="22.9636"
          y2="44.2447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3C4" />
          <stop offset="1" stopColor="#152B4A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StraightArrow;
