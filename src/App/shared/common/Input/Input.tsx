import React, { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: JSX.Element;
  placeholder?: string;
  type: string;
  name: string;
}

export default function CustomInput({
  label,
  icon,
  type,
  name,
  placeholder,
  ...rest
}: IInputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          id={label}
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-darkBlue focus:ring-darkBlue sm:text-sm"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
}
