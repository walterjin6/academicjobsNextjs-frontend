const Speedo = ({ size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <mask id="lineMdSpeedLoop0">
        <path
          fill="none"
          stroke="red"
          stroke-dasharray="56"
          stroke-dashoffset="56"
          stroke-linecap="round"
          stroke-width="2"
          d="M5 19V19C4.69726 19 4.41165 18.8506 4.25702 18.5904C3.45852 17.2464 3 15.6767 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 15.6767 20.5415 17.2464 19.743 18.5904C19.5884 18.8506 19.3027 19 19 19z"
        >
          <animate
            fill="red"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="56;0"
          />
        </path>
        <g fill-opacity="0" transform="rotate(-100 12 14)">
          <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
            <animate
              fill="red"
              attributeName="d"
              begin="0.4s"
              dur="0.2s"
              values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"
            />
          </path>
          <path
            fill="#fff"
            d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
          >
            <animate
              fill="red"
              attributeName="d"
              begin="0.4s"
              dur="0.2s"
              values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"
            />
          </path>
          <set attributeName="fill-opacity" begin="0.4s" to="1" />
          <animateTransform
            attributeName="transform"
            begin="0.6s"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"
          />
        </g>
      </mask>
      <rect width="24" height="24" fill="red" mask="url(#lineMdSpeedLoop0)" />
    </svg>
  );
};
export default Speedo;
