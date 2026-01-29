"use client";

import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  category: string;
  reason: string;
};

export default function ScheduleForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    category: "",
    reason: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const dateRef = useRef<HTMLInputElement | null>(null);
  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.firstName.trim() || form.firstName.trim().length < 5) {
      newErrors.firstName = "First name must be at least 5 characters";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!form.category) {
      newErrors.category = "Please select a category";
    }
    if (!form.reason.trim() || form.reason.trim().length < 8) {
      newErrors.reason = "Reason must be at least 8 characters";
    }
    if (!form.date) {
      newErrors.date = "Please select an available date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;
    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/api/meeting`, {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone,
        availableDate: form.date, // 🔥 FIX HERE
        category: form.category,
        reason: form.reason.trim(),
      });

      setSuccess("Meeting request submitted successfully!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        category: "",
        reason: "",
      });
    } catch (error: unknown) {
      const msg = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to schedule meeting")
        : "Failed to schedule meeting";

      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const openDatePicker = () => {
    const input = dateRef.current;
    if (!input) return;

    if (typeof (input as any).showPicker === "function") {
      (input as any).showPicker();
    } else {
      input.focus();
    }
  };

  return (
    <section className="w-full bg-black py-26 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <h2
          className="
            absolute md:-top-35 left-6 lg:left-13 text-[40px]
            xxs:text-[48px] xs1:text-[56px] md:text-[64px] top-[-100px]
            lg:text-[130px]
            font-[900] text-red-600
            md:text-[100px]
            z-0 pointer-events-none select-none
          "
        >
          SCHEDULE
        </h2>

        {/* Form Card */}
        <div className="bg-white max-w-[860px] p-10 lg:p-14 shadow-xl ml-auto lg:mr-[50px] relative z-10">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid grid-cols-1 xxs:gap-y-3 lg:grid-cols-2 gap-x-10 gap-y-10"
          >
            {/* First Name */}
            <div>
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                inputMode="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName: e.target.value.replace(/[^A-Za-z\s]/g, ""),
                  })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.firstName ?? ""}
              </p>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName: e.target.value.replace(/[^A-Za-z\s]/g, ""),
                  })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.lastName ?? ""}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Email Id
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.email ?? ""}
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                maxLength={10}
                inputMode="numeric"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.phone ?? ""}
              </p>
            </div>

            {/* Date */}
            <div className="relative cursor-pointer" onClick={openDatePicker}>
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Available Dates
              </label>

              <input
                ref={dateRef}
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 pr-10 text-black bg-transparent appearance-none"
              />

              {/* Clickable calendar icon */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // prevent double click
                  openDatePicker();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                {/* your SVG */}
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9608 2.37507H15.5858V4.15629C15.5858 4.32783 15.5521 4.49768 15.4864 4.65616C15.4208 4.81464 15.3245 4.95864 15.2033 5.07993C15.082 5.20123 14.938 5.29744 14.7795 5.36309C14.621 5.42873 14.4511 5.46252 14.2796 5.46252C14.1081 5.46252 13.9382 5.42873 13.7797 5.36309C13.6213 5.29744 13.4773 5.20123 13.356 5.07993C13.2347 4.95864 13.1385 4.81464 13.0728 4.65616C13.0072 4.49768 12.9734 4.32783 12.9734 4.15629V2.37507H6.05631V4.15629C6.05631 4.50272 5.91869 4.83497 5.67372 5.07993C5.42875 5.3249 5.09651 5.46252 4.75008 5.46252C4.40364 5.46252 4.0714 5.3249 3.82643 5.07993C3.58147 4.83497 3.44385 4.50272 3.44385 4.15629V2.37507H1.06889C0.927589 2.37346 0.787405 2.4002 0.656624 2.45372C0.525843 2.50723 0.407122 2.58642 0.307481 2.68662C0.20784 2.78681 0.129303 2.90597 0.0765156 3.03705C0.0237282 3.16812 -0.00223808 3.30845 0.000152622 3.44974V16.7376C-0.00220632 16.8764 0.0228003 17.0143 0.0737442 17.1435C0.124688 17.2726 0.200571 17.3904 0.297059 17.4902C0.393548 17.59 0.50875 17.6698 0.636088 17.7251C0.763426 17.7804 0.900404 17.81 1.0392 17.8123H17.9608C18.0996 17.81 18.2366 17.7804 18.3639 17.7251C18.4912 17.6698 18.6065 17.59 18.7029 17.4902C18.7994 17.3904 18.8753 17.2726 18.9263 17.1435C18.9772 17.0143 19.0022 16.8764 18.9998 16.7376V3.44974C19.0022 3.31094 18.9772 3.17305 18.9263 3.04392C18.8753 2.91479 18.7994 2.79696 18.7029 2.69717C18.6065 2.59737 18.4912 2.51756 18.3639 2.46229C18.2366 2.40703 18.0996 2.37739 17.9608 2.37507ZM4.75008 14.2499H3.5626V13.0624H4.75008V14.2499ZM4.75008 11.2812H3.5626V10.0937H4.75008V11.2812ZM4.75008 8.31247H3.5626V7.12499H4.75008V8.31247ZM8.31252 14.2499H7.12504V13.0624H8.31252V14.2499ZM8.31252 11.2812H7.12504V10.0937H8.31252V11.2812ZM8.31252 8.31247H7.12504V7.12499H8.31252V8.31247ZM11.875 14.2499H10.6875V13.0624H11.875V14.2499ZM11.875 11.2812H10.6875V10.0937H11.875V11.2812ZM11.875 8.31247H10.6875V7.12499H11.875V8.31247ZM15.4374 14.2499H14.2499V13.0624H15.4374V14.2499ZM15.4374 11.2812H14.2499V10.0937H15.4374V11.2812ZM15.4374 8.31247H14.2499V7.12499H15.4374V8.31247Z"
                    fill="#837E7E"
                    fill-opacity="0.95"
                  />
                  <path
                    d="M4.74999 4.74992C4.90746 4.74992 5.05848 4.68737 5.16983 4.57602C5.28118 4.46467 5.34373 4.31365 5.34373 4.15618V0.59374C5.34373 0.436271 5.28118 0.28525 5.16983 0.173903C5.05848 0.0625546 4.90746 0 4.74999 0C4.59252 0 4.4415 0.0625546 4.33015 0.173903C4.2188 0.28525 4.15625 0.436271 4.15625 0.59374V4.15618C4.15625 4.31365 4.2188 4.46467 4.33015 4.57602C4.4415 4.68737 4.59252 4.74992 4.74999 4.74992Z"
                    fill="#837E7E"
                    fill-opacity="0.95"
                  />
                  <path
                    d="M14.25 4.74992C14.4075 4.74992 14.5585 4.68737 14.6698 4.57602C14.7812 4.46467 14.8437 4.31365 14.8437 4.15618V0.59374C14.8437 0.436271 14.7812 0.28525 14.6698 0.173903C14.5585 0.0625546 14.4075 0 14.25 0C14.0925 0 13.9415 0.0625546 13.8302 0.173903C13.7188 0.28525 13.6562 0.436271 13.6562 0.59374V4.15618C13.6562 4.31365 13.7188 4.46467 13.8302 4.57602C13.9415 4.68737 14.0925 4.74992 14.25 4.74992Z"
                    fill="#837E7E"
                    fill-opacity="0.95"
                  />
                </svg>
              </button>

              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.date ?? ""}
              </p>
            </div>

            {/* Category */}
            <div className="relative">
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Select Category
              </label>

              <label className="relative block cursor-pointer">
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-2 pr-8
             bg-transparent text-black appearance-none cursor-pointer
             text-[15px] md:text-[16px]"
                >
                  <option value="" disabled hidden />
                  <option className="text-[15px]">Film</option>
                  <option className="text-[15px]">Digital Content</option>
                  <option className="text-[15px]">Brand Collaboration</option>
                </select>

                <span className="absolute right-[0] top-1/2 -translate-y-[80%] pointer-events-none">
                  <svg
                    className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </span>
              </label>

              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.category ?? ""}
              </p>
            </div>

            {/* Reason */}
            <div className="lg:col-span-2">
              <label className="block text-[16px] md:text-[18px] lg:text-[21px] text-gray-600 mb-2">
                Reason For Reaching Out
              </label>
              <textarea
                rows={2}
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 resize-none text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.reason ?? ""}
              </p>
            </div>

            {/* Submit */}
            {success && (
              <p className="text-green-600 text-sm lg:col-span-2">{success}</p>
            )}

            <div className="lg:col-span-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-semibold md:text-[18px] tracking-wide transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
