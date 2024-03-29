import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmit?: boolean;
  customCss?: string;
}

export default function CustomButton({
  children,
  isSubmit,
  customCss,
  ...rest
}: IButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      {...rest}
      className={`bg-darkBlue text-white py-2 px-4 rounded-full hover:bg-blue ${customCss}`}
    >
      {children}
    </button>
  );
}
