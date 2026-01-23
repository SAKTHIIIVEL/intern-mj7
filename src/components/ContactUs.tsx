"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

type FormData = {
  firstName: string;
  email: string;
  contact: string;
  location: string;
  message: string;
};

export default function ContactUs() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    email: "",
    contact: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLFormElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current) {
            setShowLeft(entry.isIntersecting);
          }
          if (entry.target === rightRef.current) {
            setShowRight(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  /* -------------------- VALIDATION -------------------- */
  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.firstName.trim() || form.firstName.trim().length < 5) {
      newErrors.firstName = "First name must be at least 5 characters";
    }
    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Valid email is required";
    }
    if (!form.contact.match(/^\d{10}$/)) {
      newErrors.contact = "Contact number must be exactly 10 digits";
    }
    if (!form.location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!form.message.trim() || form.message.trim().length < 8) {
      newErrors.message = "Message must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------------------- SUBMIT -------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    if (!validate()) return;

    try {
      setLoading(true);
      await axios.post("/api/contact", form);
      setSuccess("Message sent successfully!");
      setForm({
        firstName: "",
        email: "",
        contact: "",
        location: "",
        message: "",
      });
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  /* -------------------- JSX -------------------- */
  return (
    <section
      id="contact"
      className="
        w-full bg-black py-12 px-6 lg:py-24 lg:px-6

        /* 📱 mobile */
        max-sm:px-[20px] max-sm:py-[70px]

        /* 📟 tablet only (768–1023) */
        min-[768px]:max-[1023px]:px-[40px]

        /* 💻 desktop */
        xl:px-[130px]
        2xl:px-[152px]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-20
          min-[768px]:max-[1023px]:gap-[28px]
          max-sm:gap-[10px]
        "
      >
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div
          ref={leftRef}
          className={`
            transition-all duration-700 ease-out
            ${
              showLeft
                ? "opacity-100 translate-x-0 translate-y-0"
                : isMobile
                  ? "opacity-0 -translate-y-14"
                  : "opacity-0 -translate-x-20"
            }
          `}
        >
          <h2
            className="
              text-[38px]
              min-[768px]:max-[1023px]:text-[58px]
              max-sm:text-[48px]
              lg:text-[80px]
              xl:text-[100px]
              font-[900] leading-none mb-6
            "
          >
            <span className="text-red-600">CONTACT</span>
            <br />
            <span className="text-white flex items-center gap-4">
              US
              <span className="max-md:hidden w-[260px] h-[5px] bg-white inline-block" />
              <span className="md:hidden w-[160px] h-[5px] bg-white inline-block" />
            </span>
          </h2>

          <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] max-w-md mb-12">
            We specialize in producing high-quality films, digital content, and
            visual narratives that blend strong concepts with striking
            aesthetics.
          </p>

          {/* desktop socials */}
          <div className="flex gap-8 mt-45 max-md:hidden">
            {/* icons unchanged */}
            <div
              className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4726 10.6753C14.9279 10.6753 13.4465 11.2889 12.3543 12.3812C11.2621 13.4734 10.6484 14.9548 10.6484 16.4995C10.6484 18.0441 11.2621 19.5255 12.3543 20.6178C13.4465 21.71 14.9279 22.3236 16.4726 22.3236C18.0173 22.3236 19.4987 21.71 20.5909 20.6178C21.6831 19.5255 22.2968 18.0441 22.2968 16.4995C22.2968 14.9548 21.6831 13.4734 20.5909 12.3812C19.4987 11.2889 18.0173 10.6753 16.4726 10.6753Z"
                  fill="#FB270C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.10013 0.51755C13.3294 -0.172517 19.6157 -0.172517 25.845 0.51755C29.2481 0.897464 31.9917 3.57658 32.3913 6.99223C33.1295 13.3086 33.1295 19.6895 32.3913 26.0059C31.9917 29.4215 29.2481 32.1006 25.8468 32.4823C19.6169 33.1725 13.3299 33.1725 7.10013 32.4823C3.69702 32.1006 0.953395 29.4215 0.553767 26.0077C-0.184589 19.6907 -0.184589 13.3092 0.553767 6.99223C0.953395 3.57658 3.69702 0.897464 7.10013 0.51755ZM25.4328 5.74675C24.9575 5.74675 24.5017 5.93556 24.1656 6.27163C23.8296 6.60771 23.6407 7.06352 23.6407 7.5388C23.6407 8.01408 23.8296 8.4699 24.1656 8.80597C24.5017 9.14205 24.9575 9.33085 25.4328 9.33085C25.9081 9.33085 26.3639 9.14205 26.7 8.80597C27.036 8.4699 27.2248 8.01408 27.2248 7.5388C27.2248 7.06352 27.036 6.60771 26.7 6.27163C26.3639 5.93556 25.9081 5.74675 25.4328 5.74675ZM7.96031 16.4991C7.96031 14.2415 8.85713 12.0763 10.4535 10.48C12.0498 8.88364 14.215 7.98681 16.4725 7.98681C18.7301 7.98681 20.8953 8.88364 22.4916 10.48C24.088 12.0763 24.9848 14.2415 24.9848 16.4991C24.9848 18.7566 24.088 20.9218 22.4916 22.5181C20.8953 24.1145 18.7301 25.0113 16.4725 25.0113C14.215 25.0113 12.0498 24.1145 10.4535 22.5181C8.85713 20.9218 7.96031 18.7566 7.96031 16.4991Z"
                  fill="#FB270C"
                />
              </svg>
            </div>

            <div
              className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
            >
              <svg
                width="21"
                height="36"
                viewBox="0 0 21 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.10311 34.2484V21.1556H0.999157C0.734164 21.1556 0.480025 21.0522 0.292647 20.8683C0.105268 20.6843 0 20.4348 0 20.1746V14.9961C0 14.736 0.105268 14.4865 0.292647 14.3025C0.480025 14.1185 0.734164 14.0152 0.999157 14.0152H6.08294V9.00231C5.96133 7.81353 6.10628 6.61303 6.50763 5.48512C6.90897 4.35721 7.55696 3.32925 8.4061 2.47344C9.25524 1.61763 10.2849 0.95472 11.4228 0.531276C12.5607 0.107832 13.7793 -0.065879 14.9929 0.0223452H19.2461C19.5137 0.0218303 19.7707 0.124585 19.9617 0.308441C20.1527 0.492297 20.2625 0.742517 20.2673 1.00512V5.3898C20.2616 5.65194 20.1514 5.90143 19.9605 6.08481C19.7697 6.26818 19.5132 6.37084 19.2461 6.37078H16.5878C13.7169 6.37078 13.165 7.70634 13.165 9.67009V14.0134H19.9905C20.1323 14.0088 20.2735 14.0345 20.4042 14.0889C20.5349 14.1433 20.6519 14.225 20.7472 14.3283C20.8425 14.4316 20.9137 14.554 20.9558 14.6871C20.998 14.8201 21.0102 14.9606 20.9915 15.0987L20.3736 20.297C20.3427 20.5351 20.2239 20.7538 20.0398 20.9117C19.8557 21.0696 19.6189 21.1557 19.3745 21.1538H13.2072V34.2466C13.2107 34.478 13.1668 34.7076 13.0782 34.922C12.9895 35.1363 12.858 35.331 12.6913 35.4945C12.5246 35.658 12.3261 35.787 12.1077 35.8738C11.8893 35.9606 11.6553 36.0034 11.4197 35.9998H7.86859C7.63483 36.0005 7.40326 35.9555 7.1874 35.8675C6.97154 35.7794 6.77572 35.6499 6.61136 35.4867C6.44701 35.3235 6.31741 35.1298 6.23015 34.9169C6.14289 34.704 6.0997 34.4779 6.10311 34.2484Z"
                  fill="#FB270C"
                />
              </svg>
            </div>

            <div
              className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C24.8368 0 32 7.1632 32 16C32 24.8368 24.8368 32 16 32C13.1724 32.0048 10.3945 31.2565 7.95202 29.832L0.00642472 32L2.16962 24.0512C0.743958 21.6079 -0.0049306 18.8288 2.44299e-05 16C2.44299e-05 7.1632 7.16322 0 16 0ZM10.5472 8.47999L10.2272 8.49279C10.0203 8.50705 9.81817 8.56139 9.63202 8.65279C9.45854 8.75121 9.30012 8.87407 9.16162 9.01759C8.96962 9.19839 8.86082 9.35519 8.74402 9.50719C8.15221 10.2766 7.83358 11.2213 7.83842 12.192C7.84162 12.976 8.04642 13.7392 8.36642 14.4528C9.02082 15.896 10.0976 17.424 11.5184 18.84C11.8608 19.1808 12.1968 19.5232 12.5584 19.8416C14.3239 21.3958 16.4277 22.5167 18.7024 23.1152L19.6112 23.2544C19.9072 23.2704 20.2032 23.248 20.5008 23.2336C20.9667 23.209 21.4216 23.0829 21.8336 22.864C22.043 22.7557 22.2474 22.6383 22.4464 22.512C22.4464 22.512 22.5141 22.4661 22.6464 22.368C22.8624 22.208 22.9952 22.0944 23.1744 21.9072C23.3088 21.7685 23.4208 21.6075 23.5104 21.424C23.6352 21.1632 23.76 20.6656 23.8112 20.2512C23.8496 19.9344 23.8384 19.7616 23.8336 19.6544C23.8272 19.4832 23.6848 19.3056 23.5296 19.2304L22.5984 18.8128C22.5984 18.8128 21.2064 18.2064 20.3552 17.8192C20.2661 17.7804 20.1707 17.7582 20.0736 17.7536C19.9641 17.7421 19.8535 17.7544 19.7491 17.7894C19.6448 17.8245 19.5492 17.8815 19.4688 17.9568C19.4608 17.9536 19.3536 18.0448 18.1968 19.4464C18.1304 19.5356 18.039 19.603 17.9341 19.6401C17.8292 19.6771 17.7157 19.6821 17.608 19.6544C17.5037 19.6266 17.4016 19.5913 17.3024 19.5488C17.104 19.4656 17.0352 19.4336 16.8992 19.376C15.9806 18.9758 15.1303 18.4344 14.3792 17.7712C14.1776 17.5952 13.9904 17.4032 13.7984 17.2176C13.169 16.6147 12.6204 15.9328 12.1664 15.1888L12.072 15.0368C12.0052 14.9341 11.9505 14.824 11.9088 14.7088C11.848 14.4736 12.0064 14.2848 12.0064 14.2848C12.0064 14.2848 12.3952 13.8592 12.576 13.6288C12.752 13.4048 12.9008 13.1872 12.9968 13.032C13.1856 12.728 13.2448 12.416 13.1456 12.1744C12.6976 11.08 12.2347 9.99146 11.7568 8.90879C11.6624 8.69439 11.3824 8.54079 11.128 8.51039C11.0416 8.49973 10.9552 8.49119 10.8688 8.48479C10.654 8.47247 10.4386 8.47461 10.224 8.49119L10.5472 8.47999Z"
                  fill="#FB270C"
                />
              </svg>
            </div>

            <div
              className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
            >
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.09664 5.90412C2.20864 5.90412 1.46464 5.62812 0.864641 5.07612C0.288641 4.50012 0.000640675 3.79212 0.000640675 2.95212C0.000640675 2.11212 0.288641 1.41612 0.864641 0.864119C1.46464 0.28812 2.20864 0.000119686 3.09664 0.000119686C3.98464 0.000119686 4.71664 0.28812 5.29264 0.864119C5.89264 1.41612 6.19264 2.11212 6.19264 2.95212C6.19264 3.79212 5.89264 4.50012 5.29264 5.07612C4.71664 5.62812 3.98464 5.90412 3.09664 5.90412ZM5.58064 8.28012V28.2241H0.540641V8.28012H5.58064ZM21.6122 7.99212C23.9882 7.99212 25.9082 8.74812 27.3722 10.2601C28.8362 11.7481 29.5682 13.8361 29.5682 16.5241V28.2241H24.5282V17.2081C24.5282 15.6241 24.1322 14.4121 23.3402 13.5721C22.5482 12.7081 21.4682 12.2761 20.1002 12.2761C18.7082 12.2761 17.6042 12.7081 16.7882 13.5721C15.9962 14.4121 15.6002 15.6241 15.6002 17.2081V28.2241H10.5602V8.28012H15.6002V10.7641C16.2722 9.90012 17.1242 9.22812 18.1562 8.74812C19.2122 8.24412 20.3642 7.99212 21.6122 7.99212Z"
                  fill="#FB270C"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={rightRef}
          onSubmit={handleSubmit}
          noValidate
          className={`
    space-y-8
    transition-all duration-700 ease-out
    ${
      showRight
        ? "opacity-100 translate-x-0 translate-y-0"
        : isMobile
          ? "opacity-0 translate-y-14"
          : "opacity-0 translate-x-20"
    }
  `}
        >
          <h3 className="text-white text-[32px] mb-6">Lets Stay In Touch</h3>

          {/* FIRST NAME */}
          <div>
            <label className="text-gray-300 md:text-[17px] sm:text-[16px] text-sm">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value.replace(/[^A-Za-z\s]/g, "") })}
              className="w-full bg-transparent border-b border-gray-600
                 focus:border-white outline-none py-2 text-white"
            />
            <p className="text-red-500 text-xs mt-1 min-h-[16px]">
              {errors.firstName ?? ""}
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-300 md:text-[17px] sm:text-[16px] text-sm">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-gray-600
                 focus:border-white outline-none py-2 text-white"
            />
            <p className="text-red-500 text-xs mt-1 min-h-[16px]">
              {errors.email ?? ""}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <label className="text-gray-300 md:text-[17px] sm:text-[16px] text-sm">Contact</label>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.contact}
              onChange={(e) =>
                setForm({
                  ...form,
                  contact: e.target.value.replace(/\D/g, ""),
                })
              }
              className="w-full bg-transparent border-b border-gray-600
                 focus:border-white outline-none py-2 text-white"
            />
            <p className="text-red-500 text-xs mt-1 min-h-[16px]">
              {errors.contact ?? ""}
            </p>
          </div>

          {/* LOCATION */}
          <div>
            <label className="text-gray-300 md:text-[17px] sm:text-[16px] text-sm">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full bg-transparent border-b border-gray-600
                 focus:border-white outline-none py-2 text-white"
            />
            <p className="text-red-500 text-xs mt-1 min-h-[16px]">
              {errors.location ?? ""}
            </p>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-gray-300 md:text-[17px] sm:text-[16px] text-sm">Message</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-gray-600
                 focus:border-white outline-none py-2 text-white resize-none"
            />
            <p className="text-red-500 text-xs mt-1 min-h-[16px]">
              {errors.message ?? ""}
            </p>
          </div>

          {/* SUCCESS */}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700
               text-white py-4 font-semibold transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* mobile socials */}
        <div className="flex gap-8 mt-[30px] md:hidden lg:hidden">
          {/* icons unchanged */}
          <div
            className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4726 10.6753C14.9279 10.6753 13.4465 11.2889 12.3543 12.3812C11.2621 13.4734 10.6484 14.9548 10.6484 16.4995C10.6484 18.0441 11.2621 19.5255 12.3543 20.6178C13.4465 21.71 14.9279 22.3236 16.4726 22.3236C18.0173 22.3236 19.4987 21.71 20.5909 20.6178C21.6831 19.5255 22.2968 18.0441 22.2968 16.4995C22.2968 14.9548 21.6831 13.4734 20.5909 12.3812C19.4987 11.2889 18.0173 10.6753 16.4726 10.6753Z"
                fill="#FB270C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.10013 0.51755C13.3294 -0.172517 19.6157 -0.172517 25.845 0.51755C29.2481 0.897464 31.9917 3.57658 32.3913 6.99223C33.1295 13.3086 33.1295 19.6895 32.3913 26.0059C31.9917 29.4215 29.2481 32.1006 25.8468 32.4823C19.6169 33.1725 13.3299 33.1725 7.10013 32.4823C3.69702 32.1006 0.953395 29.4215 0.553767 26.0077C-0.184589 19.6907 -0.184589 13.3092 0.553767 6.99223C0.953395 3.57658 3.69702 0.897464 7.10013 0.51755ZM25.4328 5.74675C24.9575 5.74675 24.5017 5.93556 24.1656 6.27163C23.8296 6.60771 23.6407 7.06352 23.6407 7.5388C23.6407 8.01408 23.8296 8.4699 24.1656 8.80597C24.5017 9.14205 24.9575 9.33085 25.4328 9.33085C25.9081 9.33085 26.3639 9.14205 26.7 8.80597C27.036 8.4699 27.2248 8.01408 27.2248 7.5388C27.2248 7.06352 27.036 6.60771 26.7 6.27163C26.3639 5.93556 25.9081 5.74675 25.4328 5.74675ZM7.96031 16.4991C7.96031 14.2415 8.85713 12.0763 10.4535 10.48C12.0498 8.88364 14.215 7.98681 16.4725 7.98681C18.7301 7.98681 20.8953 8.88364 22.4916 10.48C24.088 12.0763 24.9848 14.2415 24.9848 16.4991C24.9848 18.7566 24.088 20.9218 22.4916 22.5181C20.8953 24.1145 18.7301 25.0113 16.4725 25.0113C14.215 25.0113 12.0498 24.1145 10.4535 22.5181C8.85713 20.9218 7.96031 18.7566 7.96031 16.4991Z"
                fill="#FB270C"
              />
            </svg>
          </div>

          <div
            className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
          >
            <svg
              width="21"
              height="36"
              viewBox="0 0 21 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.10311 34.2484V21.1556H0.999157C0.734164 21.1556 0.480025 21.0522 0.292647 20.8683C0.105268 20.6843 0 20.4348 0 20.1746V14.9961C0 14.736 0.105268 14.4865 0.292647 14.3025C0.480025 14.1185 0.734164 14.0152 0.999157 14.0152H6.08294V9.00231C5.96133 7.81353 6.10628 6.61303 6.50763 5.48512C6.90897 4.35721 7.55696 3.32925 8.4061 2.47344C9.25524 1.61763 10.2849 0.95472 11.4228 0.531276C12.5607 0.107832 13.7793 -0.065879 14.9929 0.0223452H19.2461C19.5137 0.0218303 19.7707 0.124585 19.9617 0.308441C20.1527 0.492297 20.2625 0.742517 20.2673 1.00512V5.3898C20.2616 5.65194 20.1514 5.90143 19.9605 6.08481C19.7697 6.26818 19.5132 6.37084 19.2461 6.37078H16.5878C13.7169 6.37078 13.165 7.70634 13.165 9.67009V14.0134H19.9905C20.1323 14.0088 20.2735 14.0345 20.4042 14.0889C20.5349 14.1433 20.6519 14.225 20.7472 14.3283C20.8425 14.4316 20.9137 14.554 20.9558 14.6871C20.998 14.8201 21.0102 14.9606 20.9915 15.0987L20.3736 20.297C20.3427 20.5351 20.2239 20.7538 20.0398 20.9117C19.8557 21.0696 19.6189 21.1557 19.3745 21.1538H13.2072V34.2466C13.2107 34.478 13.1668 34.7076 13.0782 34.922C12.9895 35.1363 12.858 35.331 12.6913 35.4945C12.5246 35.658 12.3261 35.787 12.1077 35.8738C11.8893 35.9606 11.6553 36.0034 11.4197 35.9998H7.86859C7.63483 36.0005 7.40326 35.9555 7.1874 35.8675C6.97154 35.7794 6.77572 35.6499 6.61136 35.4867C6.44701 35.3235 6.31741 35.1298 6.23015 34.9169C6.14289 34.704 6.0997 34.4779 6.10311 34.2484Z"
                fill="#FB270C"
              />
            </svg>
          </div>

          <div
            className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C24.8368 0 32 7.1632 32 16C32 24.8368 24.8368 32 16 32C13.1724 32.0048 10.3945 31.2565 7.95202 29.832L0.00642472 32L2.16962 24.0512C0.743958 21.6079 -0.0049306 18.8288 2.44299e-05 16C2.44299e-05 7.1632 7.16322 0 16 0ZM10.5472 8.47999L10.2272 8.49279C10.0203 8.50705 9.81817 8.56139 9.63202 8.65279C9.45854 8.75121 9.30012 8.87407 9.16162 9.01759C8.96962 9.19839 8.86082 9.35519 8.74402 9.50719C8.15221 10.2766 7.83358 11.2213 7.83842 12.192C7.84162 12.976 8.04642 13.7392 8.36642 14.4528C9.02082 15.896 10.0976 17.424 11.5184 18.84C11.8608 19.1808 12.1968 19.5232 12.5584 19.8416C14.3239 21.3958 16.4277 22.5167 18.7024 23.1152L19.6112 23.2544C19.9072 23.2704 20.2032 23.248 20.5008 23.2336C20.9667 23.209 21.4216 23.0829 21.8336 22.864C22.043 22.7557 22.2474 22.6383 22.4464 22.512C22.4464 22.512 22.5141 22.4661 22.6464 22.368C22.8624 22.208 22.9952 22.0944 23.1744 21.9072C23.3088 21.7685 23.4208 21.6075 23.5104 21.424C23.6352 21.1632 23.76 20.6656 23.8112 20.2512C23.8496 19.9344 23.8384 19.7616 23.8336 19.6544C23.8272 19.4832 23.6848 19.3056 23.5296 19.2304L22.5984 18.8128C22.5984 18.8128 21.2064 18.2064 20.3552 17.8192C20.2661 17.7804 20.1707 17.7582 20.0736 17.7536C19.9641 17.7421 19.8535 17.7544 19.7491 17.7894C19.6448 17.8245 19.5492 17.8815 19.4688 17.9568C19.4608 17.9536 19.3536 18.0448 18.1968 19.4464C18.1304 19.5356 18.039 19.603 17.9341 19.6401C17.8292 19.6771 17.7157 19.6821 17.608 19.6544C17.5037 19.6266 17.4016 19.5913 17.3024 19.5488C17.104 19.4656 17.0352 19.4336 16.8992 19.376C15.9806 18.9758 15.1303 18.4344 14.3792 17.7712C14.1776 17.5952 13.9904 17.4032 13.7984 17.2176C13.169 16.6147 12.6204 15.9328 12.1664 15.1888L12.072 15.0368C12.0052 14.9341 11.9505 14.824 11.9088 14.7088C11.848 14.4736 12.0064 14.2848 12.0064 14.2848C12.0064 14.2848 12.3952 13.8592 12.576 13.6288C12.752 13.4048 12.9008 13.1872 12.9968 13.032C13.1856 12.728 13.2448 12.416 13.1456 12.1744C12.6976 11.08 12.2347 9.99146 11.7568 8.90879C11.6624 8.69439 11.3824 8.54079 11.128 8.51039C11.0416 8.49973 10.9552 8.49119 10.8688 8.48479C10.654 8.47247 10.4386 8.47461 10.224 8.49119L10.5472 8.47999Z"
                fill="#FB270C"
              />
            </svg>
          </div>

          <div
            className="w-18 h-18 rounded-full
             bg-[#111]
             flex items-center justify-center
             transition
             hover:bg-gray-600"
          >
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.09664 5.90412C2.20864 5.90412 1.46464 5.62812 0.864641 5.07612C0.288641 4.50012 0.000640675 3.79212 0.000640675 2.95212C0.000640675 2.11212 0.288641 1.41612 0.864641 0.864119C1.46464 0.28812 2.20864 0.000119686 3.09664 0.000119686C3.98464 0.000119686 4.71664 0.28812 5.29264 0.864119C5.89264 1.41612 6.19264 2.11212 6.19264 2.95212C6.19264 3.79212 5.89264 4.50012 5.29264 5.07612C4.71664 5.62812 3.98464 5.90412 3.09664 5.90412ZM5.58064 8.28012V28.2241H0.540641V8.28012H5.58064ZM21.6122 7.99212C23.9882 7.99212 25.9082 8.74812 27.3722 10.2601C28.8362 11.7481 29.5682 13.8361 29.5682 16.5241V28.2241H24.5282V17.2081C24.5282 15.6241 24.1322 14.4121 23.3402 13.5721C22.5482 12.7081 21.4682 12.2761 20.1002 12.2761C18.7082 12.2761 17.6042 12.7081 16.7882 13.5721C15.9962 14.4121 15.6002 15.6241 15.6002 17.2081V28.2241H10.5602V8.28012H15.6002V10.7641C16.2722 9.90012 17.1242 9.22812 18.1562 8.74812C19.2122 8.24412 20.3642 7.99212 21.6122 7.99212Z"
                fill="#FB270C"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
