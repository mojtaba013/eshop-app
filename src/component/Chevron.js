const Chevron = ({ filterState, Section }) => {
  const status =
    filterState.some((i) => i.id === Section) &&
    filterState.find((i) => i.id === Section).isopen;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className={`w-4 h-4 text-slate-800 ${
        status ? "rotate-180" : "rotate-0"
      }  transition-transform duration-[400ms] `}
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
