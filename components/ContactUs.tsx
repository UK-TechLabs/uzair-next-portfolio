import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Button from "./common/Button";

const ContactUs = () => {
  return (
    <div className="my-8 md:my-32">
      <p className="text-4xl font-bold text-center text-green-700 mb-4">
        Want to hire me?
      </p>
      <p className="text-center text-xl mb-8">
        Feel free to reach out, and we can discuss your requirements.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex justify-center items-center gap-x-2 p-4 rounded-lg card-shadow mb-8">
            <BiLogoGmail className="text-white h-5 w-5" />

            <a href="mailto:dev.uzairkhan@gmail.com" className="text-xl">
              dev.uzairkhan@gmail.com
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex gap-x-2 items-center flex-1 justify-center p-4 rounded-lg card-shadow">
              <FaLocationArrow className="h-5 w-5" />
              <p className="text-xl flex align-center">Islamabad Pakistan</p>
            </div>
            <div className="flex gap-x-2 items-center flex-1 justify-center p-4 rounded-lg card-shadow">
              <FiPhoneCall className="h-5 w-5" />
              <a href="tel:+923118889481" className="text-xl flex align-center">
                +92 (311) 888 9481
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="text-gray-100 bg-gray-800 outline-none w-full p-2 border-2 rounded border-gray-700"
                value=""
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="text-gray-100 bg-gray-800 outline-none w-full p-2 border-2 rounded border-gray-700"
                value=""
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="text-gray-100 bg-gray-800 outline-none w-full p-2 border-2 rounded border-gray-700"
              value=""
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="text-gray-100 bg-gray-800 outline-none w-full flex-1 p-2 border-2 rounded border-gray-700"
            />
            <Button title={"Submit"} type={"submit"} handleClick={function (): void {
                          throw new Error("Function not implemented.");
                      } } />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
