import React from "react";
import SpaceLink from "../SpaceLink/SpaceLink";
import React from "react";
import SpaceLink from "../SpaceLink/SpaceLink";

type Props = {
  href: string;
};
  href: string;
};

const BackButton = ({ href }: Props) => {
  return (
    <SpaceLink href={href}>
      <div className="back-button">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <rect x="7" y="6" width="14" height="17" fill="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.666504 14C0.666504 6.64002 6.65317 0.666687 13.9998 0.666687L14.3729 0.671813C21.5606 0.869571 27.3332 6.76477 27.3332 14C27.3332 21.3467 21.3598 27.3334 13.9998 27.3334C6.65317 27.3334 0.666504 21.3467 0.666504 14ZM16.6398 19.3334C17.0265 18.9334 17.0265 18.3067 16.6265 17.92L12.6932 14L16.6265 10.08C17.0265 9.69335 17.0265 9.05335 16.6398 8.66669C16.2398 8.26669 15.6132 8.26669 15.2265 8.66669L10.5732 13.2934C10.3865 13.48 10.2798 13.7334 10.2798 14C10.2798 14.2667 10.3865 14.52 10.5732 14.7067L15.2265 19.3334C15.4132 19.5334 15.6665 19.6267 15.9198 19.6267C16.1865 19.6267 16.4398 19.5334 16.6398 19.3334Z"
              fill="#A3A2A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.666504 14C0.666504 6.64002 6.65317 0.666687 13.9998 0.666687L14.3729 0.671813C21.5606 0.869571 27.3332 6.76477 27.3332 14C27.3332 21.3467 21.3598 27.3334 13.9998 27.3334C6.65317 27.3334 0.666504 21.3467 0.666504 14ZM16.6398 19.3334C17.0265 18.9334 17.0265 18.3067 16.6265 17.92L12.6932 14L16.6265 10.08C17.0265 9.69335 17.0265 9.05335 16.6398 8.66669C16.2398 8.26669 15.6132 8.26669 15.2265 8.66669L10.5732 13.2934C10.3865 13.48 10.2798 13.7334 10.2798 14C10.2798 14.2667 10.3865 14.52 10.5732 14.7067L15.2265 19.3334C15.4132 19.5334 15.6665 19.6267 15.9198 19.6267C16.1865 19.6267 16.4398 19.5334 16.6398 19.3334Z"
              fill="url(#paint0_linear_1_2)"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="-10.5377"
              y1="14.0014"
              x2="13.6526"
              y2="38.5064"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_1_2">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </SpaceLink>
  );
};

export default BackButton;
