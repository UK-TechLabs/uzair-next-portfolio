export interface ButtonI {
    title: string;
    type: 'button' | 'submit';
    width?: string;
    handleClick: () => void
}