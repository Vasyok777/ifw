"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Heading } from "@/components/ui/typography";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data, null, 2));
    setSubmitted(true);
  };

  const canSubmit = isValid && agreed;

  if (submitted) {
    return (
      <section className="bg-ifw-dark py-16 md:py-24">
        <div className="max-w-153.25 mx-auto px-4">
          <div className="bg-ifw-gray rounded-[40px] px-6 py-8 md:px-22 md:py-15 text-center">
            <Heading level="h3" align="center" className="text-black mb-3">
              Дякуємо!
            </Heading>
            <p className="text-gray-600">
              Ми зв&apos;яжемося з вами у найближчий час
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ifw-dark py-16 md:pt-70 md:pb-27">
      <div className="max-w-[645px] mx-auto px-4">
        <div className="bg-ifw-gray rounded-[24px] md:rounded-[40px] px-6 py-8 md:px-22 md:py-15">
          <Heading level="h3" align="center" className="text-black mb-2">
            Залиште заявку
          </Heading>
          <p className="text-gray-600 text-center">
            Ми зв&apos;яжемося з вами у найближчий час
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8.75">
            <div>
              <input
                type="text"
                placeholder="Ім'я*"
                {...register("name", {
                  required: "Введіть ваше ім'я",
                })}
                className={`w-full h-16.5 px-5 rounded-full bg-white border text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ifw-purple/50 transition ${
                  errors.name ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 ml-4">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Введіть номер телефону",
                  validate: (value) => {
                    const digits = value.replace(/\D/g, "");
                    return digits.length >= 10 || "Невірний формат телефону";
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    defaultCountry="ua"
                    value={field.value}
                    onChange={field.onChange}
                    inputClassName={`!w-full !px-0 leading-[100%] !rounded-r-full !rounded-l-none !bg-white !border-0 !outline-none !shadow-none !text-black !placeholder:text-gray-400 !text-base ${
                      errors.phone ? "ring-1 ring-red-500" : ""
                    }`}
                    countrySelectorStyleProps={{
                      buttonClassName: `!h-full !flex !items-center !pl-4 !pr-3 !rounded-l-full !rounded-r-none !bg-white !border-0 !shadow-none`,
                    }}
                    className={`phone-input-wrapper h-16.5 rounded-full border bg-white transition ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 ml-4">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Невірний формат email",
                  },
                })}
                className={`w-full h-16.5 px-5 rounded-full bg-white border text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ifw-purple/50 transition ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-4">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Повідомлення"
                rows={4}
                {...register("message")}
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ifw-purple/50 transition resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-ifw-purple hover:bg-[#9688FF] disabled:bg-gray-400 disabled:opacity-70 text-ifw-gray rounded-full font-sans-wide text-[20px] h-16.5 transition-all duration-200"
            >
              Залишити заявку
            </Button>

            <div className="flex items-center gap-2 justify-center">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="border-gray-400 data-[state=checked]:bg-ifw-purple data-[state=checked]:border-ifw-purple"
              />
              <label
                htmlFor="agree"
                className="text-xs text-gray-500 cursor-pointer"
              >
                Погоджуюсь з{" "}
                <span className="underline">умовами передачі даних</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
