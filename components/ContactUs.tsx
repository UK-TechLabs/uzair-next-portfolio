"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./common/Button";
import Input from "./common/Input";
import { contactUsFormValuesI } from "@/interfaces/contact";
import { FiPhoneCall } from "react-icons/fi";

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactUsFormValuesI>();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
    visible: boolean;
  }>({ message: "", type: "success", visible: false });

  const onSubmit: SubmitHandler<contactUsFormValuesI> = async (data) => {
    try {
      setLoading(true);
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setAlert({
          message: "Your message has been sent successfully!",
          type: "success",
          visible: true,
        });
        reset();
      } else {
        setAlert({
          message: result.error || "Something went wrong",
          type: "error",
          visible: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        message: "Failed to send message. Please try again later.",
        type: "error",
        visible: true,
      });
    } finally {
      setLoading(false);

      setTimeout(() => setAlert((prev) => ({ ...prev, visible: false })), 5000);
    }
  };

  return (
    <div id="contact" className="my-8 relative md:my-32">
      <p className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4">
        Want to hire me?
      </p>
      <p className="text-center text-base md:text-xl mb-8">
        Feel free to reach out, and we can discuss your requirements.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex justify-center items-center gap-x-2 p-4 rounded-lg card-shadow mb-8">
            <BiLogoGmail className="text-white h-5 w-5" />
            <a href="mailto:eng.uzairkhann@gmail.com" className="text-base md:text-xl">
              eng.uzairkhann@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-2 p-4 rounded-lg card-shadow mb-8">
            <FaGithub className="text-white h-5 w-5" />
            <a
              href="https://github.com/uzairkhan-12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl"
            >
              github.com/uzairkhan-12
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-2 p-4 rounded-lg card-shadow mb-8">
            <BiLogoLinkedin className="text-white h-5 w-5" />
            <a
              href="https://www.linkedin.com/in/uzair-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl"
            >
              linkedin.com/in/uzair-uk
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex gap-x-2 items-center flex-1 justify-center p-4 rounded-lg card-shadow">
              <FaLocationArrow className="h-5 w-5" />
              <p className="text-base md:text-xl flex align-center">Riyadh KSA</p>
            </div>
            <div className="flex gap-x-2 items-center flex-1 justify-center p-4 rounded-lg card-shadow">
              <FiPhoneCall className="h-5 w-5" />
              <a href="tel:+966502924895" className="text-base md:text-xl flex align-center">
                +966 (50) 292 4895
              </a>
            </div>
            {/* This below code is for whatsapp */}
            {/* <div className="flex gap-x-2 items-center flex-1 justify-center p-4 rounded-lg card-shadow">
              <FaWhatsapp className="h-5 w-5" />
              <a
                href="https://api.whatsapp.com/send?phone=923118889481"
                className="text-xl flex align-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 (311) 888 9481
              </a>
            </div> */}
          </div>
        </div>
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              name="name"
              type="text"
              placeholder="Name"
              register={register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              error={errors.name?.message}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              register={register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\+?[0-9]*$/,
                  message:
                    "Phone must contain only numbers and optionally a '+' sign",
                },
              })}
              error={errors.phone?.message}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              error={errors.email?.message}
            />
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`text-gray-100 bg-gray-800 outline-none w-full p-2 border-2 rounded ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            {alert.visible && (
              <div
                className={`p-4 text-sm font-bold rounded-lg shadow-md ${
                  alert.type === "success"
                    ? "bg-green-200 text-primary"
                    : "bg-red-200 text-red-800"
                }`}
                role="alert"
              >
                {alert.message}
              </div>
            )}
            <Button title="Submit" type="submit" isLoading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
