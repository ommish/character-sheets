import { ReactNode } from 'react';

const d4 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <polygon
      points="21.83,20.5,2.2,20.5,12.015,3.5"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
  </svg>
);

const d6 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <rect
      x="3.5"
      y="3.5"
      width="17"
      height="17"
      transform="matrix(1,0,0,1,0,0)"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
  </svg>
);

const d8 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <rect
      x="4.775"
      y="4.775"
      width="14.364"
      height="14.364"
      transform="matrix(0.707,0.707,-0.707,0.707,11.957,-4.953)"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
    <line x1="3" y1="11.957" x2="21" y2="12" strokeWidth="2" stroke={color} />
  </svg>
);

const d10 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <rect
      x="4.775"
      y="4.775"
      width="14.364"
      height="14.364"
      transform="matrix(0.707,0.707,-0.707,0.707,11.957,-4.953)"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
    <path
      d=" M 3 11.957 L 7 13.5 L 12 10.5 L 17 13.5 L 21 12"
      fill="none"
      strokeWidth="2"
      stroke={color}
    />
  </svg>
);

const d12 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <polygon
      points="18.209,20.065,12.046,22,5.865,20.116,2.028,15.132,2,8.951,5.791,3.935,11.954,2,18.135,3.884,21.972,8.868,22,15.049"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
  </svg>
);

const d20 = (color: string, size?: string): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <polygon
      points="12,22.05,3.297,17.025,3.297,6.975,12,1.95,20.703,6.975,20.703,17.025"
      fill={color}
      fillOpacity="0.5"
      strokeWidth="2"
      stroke={color}
    />
  </svg>
);

export const icons = {
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d100: d10,
} as const;
