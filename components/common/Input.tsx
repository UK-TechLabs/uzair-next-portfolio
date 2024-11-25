import { InputI } from "@/interfaces/common.interface";
import React from "react";

const Input: React.FC<InputI> = ({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`text-gray-100 bg-gray-800 outline-none w-full p-2 border-2 rounded ${
          error ? "border-red-500" : "border-gray-700"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
