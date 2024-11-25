import { UseFormRegisterReturn } from "react-hook-form";

export interface ButtonI {
    title: string;
    type: 'button' | 'submit';
    width?: string;
    isLoading?: boolean
    handleClick?: () => void
}


export interface InputI {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    register: UseFormRegisterReturn;
    error?: string;
  }