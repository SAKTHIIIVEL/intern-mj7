"use client";

import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Data:", form);
    alert("Form submitted successfully!");
  };

  return (
    <section className="w-full bg-black py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <h2
          className="absolute -top-35 left-6 md:left-13
             text-[64px] md:text-[130px]
             font-[900] text-red-600
             z-0 pointer-events-none select-none"
        >
          SCHEDULE
        </h2>

        {/* Form Card */}
        <div className="bg-white max-w-[860px] p-10 min-[1450px]:mr-15 md:p-14 shadow-xl ml-auto mr-[50px] relative z-10">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10"
          >
            {/* First Name */}
            <div>
              <label className="block text-[16px] text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.firstName ?? ""}
              </p>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-[16px] text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.lastName ?? ""}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[16px] text-gray-600 mb-2">
                Email Id
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.email ?? ""}
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[16px] text-gray-600 mb-2">
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
            <div>
              <label className="block text-[16px] text-gray-600 mb-2">
                Available Dates
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
    {errors.date ?? ""}
  </p>
            </div>

            {/* Category */}
            <div className="relative">
              <label className="block text-[16px] text-gray-600 mb-2">
                Select Category
              </label>

              {/* CLICKABLE WRAPPER */}
              <label className="relative block cursor-pointer">
                <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                  className="w-full border-b border-gray-400 focus:border-black
                 outline-none py-2 pr-10
                 bg-transparent text-black
                 appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden />
                  <option>Film</option>
                  <option>Digital Content</option>
                  <option>Brand Collaboration</option>
                </select>

                {/* Chevron (NOW CLICKABLE) */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-10 h-10 text-black"
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
            <div className="md:col-span-2">
              <label className="block text-[16px] text-gray-600 mb-2">
                Reason For Reaching Out
              </label>
              <textarea
                rows={2}
                value={form.reason}
                onChange={(e) =>
                  setForm({ ...form, reason: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-black outline-none py-2 resize-none text-black bg-transparent"
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">
                {errors.reason ?? ""}
              </p>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-semibold tracking-wide transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
