const Chevron = ({ filterState, Section }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-6 h-6 ${
        filterState.find((i) => i.id === Section).isopen
          ? "rotate-180"
          : "rotate-0"
      }  transition-all duration-500 `}
    >
      at
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default Chevron;
