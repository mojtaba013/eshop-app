const Chevron = ({ filterState, Section }) => {
  console.log("filterState", filterState);
  const status =
    filterState.length > 0 && filterState.some((i) => i.id === Section)
      ? filterState.find((i) => i.id === Section).isopen
      : false;
  console.log("status", status);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-5 h-5 lg:w-6 lg:h-6 ${
        status ? "rotate-180" : "rotate-0"
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
