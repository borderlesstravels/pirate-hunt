import React from "react";

interface Props {
  className?: string;
}

const Arrow = ({ className }: Props) => {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.332592 17.7369C0.700695 18.0877 1.29663 18.0877 1.66379 17.7369L9.44855 10.2997C10.1838 9.59728 10.1838 8.45773 9.44855 7.75529L1.6073 0.263214C1.24296 -0.0839576 0.654564 -0.0884546 0.28552 0.25422C-0.0910558 0.60409 -0.095763 1.18061 0.275164 1.53588L7.45176 8.39117C7.81986 8.74284 7.81986 9.31216 7.45176 9.66383L0.332592 16.4652C-0.0355109 16.8159 -0.0355109 17.3862 0.332592 17.7369Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
