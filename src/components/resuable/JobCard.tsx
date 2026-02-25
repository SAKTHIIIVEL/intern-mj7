interface Props {
  title: string;
  type: string;
  location: string;
  desc: string;
}

export default function JobCard({ title, type, location, desc }: Props) {
  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="border-b border-white/40 py-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[65%]">
          {/* Mobile: Title + Apply Row */}
          <div className="flex justify-between items-start lg:block">
            <div className="max-w-[65%] lg:max-w-full">
              <h3 className="text-[20px] sm:text-[22px] lg:text-[30px] xl1:text-[36px] font-medium">
                {title}
              </h3>
            </div>

            {/* Apply Button (Mobile Only in this row) */}
            <button
              className="flex items-center gap-2 text-[16px] xs1:text-[18px] sm:text-[18px] lg:hidden hover:text-red-500 transition"
              onClick={handleContactScroll}
            >
              APPLY
              <svg
                width="18"
                height="18"
                viewBox="0 0 38 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3111 36.538L24.6009 6.34082"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.3751 23.0342L24.887 5.57533L7.84197 11.8835"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-[15px] sm:text-[16px] lg:text-[20px] xl1:text-[24px] mt-3">
            {desc}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/40 rounded-full text-[13px] sm:text-[14px] lg:text-[20px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5ZM15 5C12.3478 5 9.8043 6.05357 7.92893 7.92893C6.05357 9.8043 5 12.3478 5 15C5 17.6522 6.05357 20.1957 7.92893 22.0711C9.8043 23.9464 12.3478 25 15 25C17.6522 25 20.1957 23.9464 22.0711 22.0711C23.9464 20.1957 25 17.6522 25 15C25 12.3478 23.9464 9.8043 22.0711 7.92893C20.1957 6.05357 17.6522 5 15 5ZM15 7.5C15.3062 7.50004 15.6017 7.61244 15.8305 7.81589C16.0593 8.01934 16.2054 8.29969 16.2413 8.60375L16.25 8.75V14.4825L19.6337 17.8663C19.8579 18.0912 19.9881 18.393 19.9978 18.7105C20.0075 19.0279 19.896 19.3371 19.6859 19.5753C19.4759 19.8136 19.1831 19.9629 18.8669 19.993C18.5508 20.0231 18.235 19.9318 17.9838 19.7375L17.8663 19.6337L14.1163 15.8837C13.922 15.6893 13.7972 15.4363 13.7612 15.1637L13.75 15V8.75C13.75 8.41848 13.8817 8.10054 14.1161 7.86612C14.3505 7.6317 14.6685 7.5 15 7.5Z"
                  fill="white"
                />
              </svg>
              {type}
            </span>

            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/40 rounded-full text-[13px] sm:text-[14px] lg:text-[20px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 16.5 12 22 12 22C12 22 4 16.5 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10Z"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              {location}
            </span>
          </div>
        </div>

        {/* Apply Button (Desktop Only) */}
        <button
          className="hidden lg:flex items-center gap-2 text-[28px] xl1:text-[36px] hover:text-red-500 transition"
          onClick={handleContactScroll}
        >
          Apply
          <svg
            width="30"
            height="30"
            viewBox="0 0 38 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1956 34.7842L24.4855 6.03662"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.1214 21.9284L24.8396 5.21469L7.72579 11.499"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
