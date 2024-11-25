import { ButtonI } from "@/interfaces/common/common.interface";
import React from "react";

const Button = ({ title, type, isLoading, width, handleClick }: ButtonI) => {
  return (
    <button
    type={type}
    disabled={isLoading}
    onClick={handleClick}
      className={`bg-green-700 text-white font-bold py-2 px-4 rounded ${
        width ? width : "w-full"
      }`}
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
};

export default Button;
