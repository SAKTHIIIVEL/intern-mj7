import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* FILM STRIP (FULL WIDTH) */}
      <div className="w-full overflow-hidden mb-10">
        <svg
          viewBox="0 0 1440 337"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            clip-path="url(#clip0)"
            transform-box="fill-box"
            transform-origin="0% 50%"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-75 0 160; 0 0 160; 0 0 160; -75 0 160"
              keyTimes="0;0.06;0.92;1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="
    0.9 0 0.2 1;
    0 0 1 1;
    0.9 0 0.2 1
  "
            />

            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -14; 0 10; 0 10; 0 -14"
              keyTimes="0;0.06;0.92;1"
              dur="5s"
              repeatCount="indefinite"
              additive="sum"
            />

            <path
              d="M-26.8 153.9L1437.1 0L1450.2 124.3L-13.7 278.2Z"
              fill="#120E0D"
            />

            <rect
              x="28"
              y="78"
              width="69"
              height="234"
              transform="rotate(-16 28 78)"
              fill="#D9D9D9"
            />
            <rect
              x="233"
              y="57"
              width="69"
              height="234"
              transform="rotate(-16 233 57)"
              fill="#D9D9D9"
            />
            <rect
              x="439"
              y="35"
              width="69"
              height="234"
              transform="rotate(-16 439 35)"
              fill="#D9D9D9"
            />
            <rect
              x="645"
              y="14"
              width="69"
              height="234"
              transform="rotate(-16 645 14)"
              fill="#D9D9D9"
            />
            <rect
              x="851"
              y="-8"
              width="69"
              height="234"
              transform="rotate(-16 851 -8)"
              fill="#D9D9D9"
            />
            <rect
              x="1057"
              y="-30"
              width="69"
              height="234"
              transform="rotate(-16 1057 -30)"
              fill="#D9D9D9"
            />
            <rect
              x="1263"
              y="-51"
              width="69"
              height="234"
              transform="rotate(-16 1263 -51)"
              fill="#D9D9D9"
            />
          </g>

          <g clip-path="url(#clip1)">
            <rect x="-16" y="103" width="1472" height="234" fill="#120E0D" />

            <rect
              x="116"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 116 135)"
              fill="#D9D9D9"
            />
            <rect
              x="323"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 323 135)"
              fill="#D9D9D9"
            />
            <rect
              x="530"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 530 135)"
              fill="#D9D9D9"
            />
            <rect
              x="737"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 737 135)"
              fill="#D9D9D9"
            />
            <rect
              x="944"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 944 135)"
              fill="#D9D9D9"
            />
            <rect
              x="1151"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 1151 135)"
              fill="#D9D9D9"
            />
            <rect
              x="1358"
              y="135"
              width="69"
              height="234"
              transform="rotate(17 1358 135)"
              fill="#D9D9D9"
            />
          </g>

          <defs>
            <clipPath id="clip0">
              <path d="M-26.8 153.9L1437.1 0L1450.2 124.3L-13.7 278.2Z" />
            </clipPath>

            <clipPath id="clip1">
              <rect x="-16" y="256" width="1472" height="81" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="w-full h-[2px] bg-white/70" />

      {/* MAIN FOOTER CONTENT */}
      <div
        className="
      max-w-[1440px] mx-auto
      px-6 py-16
      md:pl-30 pr-15
      grid grid-cols-1 md:grid-cols-3 gap-22

      /* 📟 TABLET ONLY (768–1023px) */
      min-[768px]:max-[1023px]:px-[40px]
      min-[768px]:max-[1023px]:gap-[40px]

      /* 📱 MOBILE */
      max-sm:gap-[40px]
    "
      >
        {/* LEFT : LOGO + ABOUT */}
        <div className="space-y-6">
          <Link href="#hero">
          <div className="flex items-center gap-3">
            <Image
              src="/navbar_logo.png"
              alt="MJ7 Logo"
              width={100}
              height={100}
            />
          </div>
          </Link>

          <p
            className="
          text-[#DBDADA] font-light leading-relaxed
          text-[20px] md:max-w-[430px]

          /* 📟 tablet */
          min-[768px]:max-[1023px]:text-[16px]
          xxs1:text-[15px]
          xxs:text-[16px]
          xs:text-[17px]
          xs1:text-[18px]
          md:text-[19px]
          lg:text-[20px]
        "
          >
            MJ7 Cinema Production is a creative powerhouse dedicated to crafting
            compelling cinematic experiences that resonate with audiences across
            cultures and platforms.
          </p>
        </div>

        {/* CENTER : NAV LINKS */}
        <div className="space-y-4 text-left md:mx-auto">
          <h4
            className="
          text-red-600 font-semibold
          text-[24px]

          /* 📟 tablet */
          min-[768px]:max-[1023px]:text-[18px]
          xxs1:text-[18px]
          xxs:text-[19px]
          xs:text-[20px]
          xs1:text-[21px]
          md:text-[22px]
          lg:text-[23px]
        "
          >
            Home
          </h4>

          <ul
            className="
          space-y-2 text-[#DBDADA] font-light
          text-[20px]

          /* 📟 tablet */
          min-[768px]:max-[1023px]:text-[16px]
          xxs1:text-[15px]
          xxs:text-[16px]
          xs:text-[17px]
          xs1:text-[18px]
          md:text-[19px]
          lg:text-[20px]
        "
          >
            <li>
              <Link href="#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#project" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#team" className="hover:text-white transition">
                Team
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT : CONTACT INFO */}
        <div className="space-y-4">
          <h4
            className="
          text-red-600 font-semibold
          text-[24px]

          /* 📟 tablet */
          min-[768px]:max-[1023px]:text-[18px]
          xxs1:text-[18px]
          xxs:text-[19px]
          xs:text-[20px]
          xs1:text-[21px]
          md:text-[22px]
          lg:text-[23px]
        "
          >
            Contact Info
          </h4>

          <ul
            className="
          space-y-4 text-[#DBDADA] font-light
          text-[20px]

          /* 📟 tablet */
          min-[768px]:max-[1023px]:text-[16px]
          xxs1:text-[15px]
          xxs:text-[16px]
          xs:text-[17px]
          xs1:text-[18px]
          md:text-[19px]
          lg:text-[20px]
        "
          >
            <li className="flex items-start gap-3">
              <span className="text-red-600">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M19.8544 24.3745C18.8631 24.3745 17.4707 24.016 15.3856 22.8511C12.8501 21.4292 10.889 20.1165 8.36716 17.6013C5.93575 15.1714 4.75255 13.5982 3.09658 10.5849C1.22579 7.18254 1.5447 5.3991 1.90119 4.63687C2.32572 3.72586 2.95236 3.18097 3.76232 2.64015C4.22237 2.33873 4.70922 2.08035 5.21669 1.86828C5.26747 1.84644 5.3147 1.82562 5.35685 1.80683C5.60822 1.69359 5.98908 1.52246 6.4715 1.70527C6.79345 1.82613 7.08087 2.07344 7.5308 2.51777C8.45349 3.42777 9.71439 5.45445 10.1795 6.44976C10.4918 7.12058 10.6985 7.5634 10.699 8.06004C10.699 8.64148 10.4065 9.08988 10.0516 9.57383C9.98505 9.66472 9.91904 9.75156 9.85505 9.83586C9.46861 10.3437 9.3838 10.4904 9.43966 10.7525C9.5529 11.2791 10.3974 12.8467 11.7852 14.2315C13.1731 15.6163 14.6955 16.4075 15.2242 16.5202C15.4974 16.5786 15.6472 16.4902 16.1712 16.0901C16.2464 16.0327 16.3236 15.9733 16.4043 15.9139C16.9456 15.5112 17.3732 15.2263 17.941 15.2263H17.944C18.4381 15.2263 18.8611 15.4406 19.5619 15.794C20.476 16.2551 22.5636 17.4998 23.4792 18.4235C23.9245 18.8724 24.1728 19.1588 24.2942 19.4802C24.477 19.9642 24.3049 20.3435 24.1926 20.5974C24.1738 20.6396 24.153 20.6858 24.1312 20.7371C23.9174 21.2436 23.6575 21.7295 23.3547 22.1884C22.8149 22.9958 22.268 23.6209 21.355 24.046C20.8861 24.2678 20.373 24.3801 19.8544 24.3745Z"
                    fill="lab(48.4493% 77.4328 61.5452)"
                  />{" "}
                </svg>
              </span>
              <span>+91-9677787817</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-red-600">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z"
                    fill="lab(48.4493% 77.4328 61.5452)"
                  />{" "}
                </svg>
              </span>
              <span>contact@mj7.com</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-600">
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.62362 23.6737C8.62362 23.6737 0 16.4825 0 9.40646C0 6.91171 1.00089 4.51914 2.78249 2.75509C4.56408 0.991035 6.98044 0 9.5 0C12.0196 0 14.4359 0.991035 16.2175 2.75509C17.9991 4.51914 19 6.91171 19 9.40646C19 16.4825 10.3764 23.6737 10.3764 23.6737C9.89662 24.1111 9.10694 24.1064 8.62362 23.6737ZM9.5 13.5218C10.0458 13.5218 10.5863 13.4153 11.0905 13.2085C11.5948 13.0017 12.053 12.6986 12.4389 12.3164C12.8249 11.9343 13.131 11.4806 13.3399 10.9813C13.5487 10.482 13.6562 9.94689 13.6562 9.40646C13.6562 8.86603 13.5487 8.33089 13.3399 7.83159C13.131 7.3323 12.8249 6.87863 12.4389 6.49649C12.053 6.11434 11.5948 5.81121 11.0905 5.60439C10.5863 5.39758 10.0458 5.29113 9.5 5.29113C8.39769 5.29113 7.34054 5.72471 6.56109 6.49649C5.78164 7.26826 5.34375 8.31501 5.34375 9.40646C5.34375 10.4979 5.78164 11.5447 6.56109 12.3164C7.34054 13.0882 8.39769 13.5218 9.5 13.5218Z"
                    fill="lab(48.4493% 77.4328 61.5452)"
                  />{" "}
                </svg>
              </span>
              <span className="leading-relaxed">
                Corporate Office: <br />
                No.18, Velan Avenue, Rice Mill Road, Kandigai, Chennai – 600127
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-[2px] bg-white/70" />

      {/* COPYRIGHT */}
      <div
        className="
      text-center text-red-600 py-6
      text-[16px]

      /* 📟 tablet */
      min-[768px]:max-[1023px]:text-[14px]
      xxs1:text-[11px]
      xxs:text-[12px]
      xs:text-[13px]
      xs1:text-[14px]
      md:text-[15px]
      lg:text-[16px]
    "
      >
        © {new Date().getFullYear()} MJ7creationsPvtLtd. All rights reserved.{" "}
        <span className="text-red-600">Designed & Developed By Manvian</span>
      </div>
    </footer>
  );
}
