import Link from "next/link";

function Button({ text, to }) {
  return (
    <Link href={to} target="_blank" className="relative inline-flex items-center gap-3 w-fit bg-[#7808d0] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-black">
      <span className="relative flex items-center justify-center w-6 h-6 bg-white text-[#7808d0] rounded-full overflow-hidden">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-2.5 h-2.5 transition-transform duration-300 ease-in-out transform hover:translate-x-[150%] hover:-translate-y-[150%]"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-2.5 h-2.5 transition-transform duration-300 ease-in-out delay-100 transform -translate-x-[150%] translate-y-[150%] hover:translate-x-0 hover:translate-y-0"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      {text}
    </Link>
  );
}

export default Button;
