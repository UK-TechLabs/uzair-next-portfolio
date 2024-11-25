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
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
  }