/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
const HeaderIcon = ({ width = '1em', height = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <rect
      x="5"
      y="5"
      width="0.35em"
      height="0.35em"
      rx="2"
      fill="currentColor"
    />
    <rect
      x="25"
      y="5"
      width="0.35em"
      height="0.35em"
      rx="2"
      fill="currentColor"
    />
    <rect
      x="25"
      y="25"
      width="0.35em"
      height="0.35em"
      rx="2"
      fill="currentColor"
    />
    <rect
      x="5"
      y="25"
      width="0.35em"
      height="0.35em"
      rx="2"
      fill="currentColor"
    />
  </svg>
);

const UpDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="1em"
    height="1em"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="1em"
    height="1em"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="1em"
    height="1em"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const InputClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
  >
    <path
      d="M10.6 0.799805C15.902 0.799805 20.2 5.09787 20.2 10.3998C20.2 15.7018 15.902 19.9998 10.6 19.9998C5.29807 19.9998 1 15.7018 1 10.3998C1 5.09787 5.29807 0.799805 10.6 0.799805Z"
      fill="#E0E0E0"
      stroke="#9E9E9E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.6002 10.4L13.0002 12.8M10.6002 10.4L8.2002 8M10.6002 10.4L8.2002 12.8M10.6002 10.4L13.0002 8"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const OnlineExpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 16"
    fill="none"
  >
    <path
      d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 7 12"
    fill="none"
  >
    <path
      d="M1.22015 2.03009C1.08767 1.88792 1.01555 1.69987 1.01898 1.50557C1.02241 1.31127 1.10112 1.12588 1.23853 0.988469C1.37595 0.851056 1.56133 0.772344 1.75563 0.768916C1.94993 0.765487 2.13798 0.83761 2.28015 0.97009L6.78015 5.47009C6.92061 5.61072 6.99949 5.80134 6.99949 6.00009C6.99949 6.19884 6.92061 6.38946 6.78015 6.53009L2.28015 11.0301C2.21149 11.1038 2.12869 11.1629 2.03669 11.2039C1.94469 11.2449 1.84538 11.2669 1.74468 11.2687C1.64397 11.2705 1.54394 11.2519 1.45056 11.2142C1.35717 11.1765 1.27233 11.1203 1.20112 11.0491C1.1299 10.9779 1.07375 10.8931 1.03603 10.7997C0.99831 10.7063 0.979785 10.6063 0.981562 10.5056C0.983339 10.4049 1.00538 10.3056 1.04637 10.2136C1.08736 10.1216 1.14647 10.0388 1.22015 9.97009L5.19015 6.00009L1.22015 2.03009Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Calendar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="1em"
    height="1em"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 12 22"
    fill="none"
  >
    <path d="M5 14H0L7 0V8H12L5 22V14Z" fill="#E91E63" />
  </svg>
);

export {
  HeaderIcon,
  UpDownIcon,
  SearchIcon,
  CloseIcon,
  OnlineExpIcon,
  ChevronRight,
  Calendar,
  BoltIcon,
  InputClose,
};
