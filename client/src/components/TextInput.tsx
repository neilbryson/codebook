import React, { InputHTMLAttributes, ReactElement } from 'react';

export const TextInput = ({
  className,
  ...other
}: InputHTMLAttributes<HTMLInputElement>): ReactElement<HTMLInputElement> => (
  <input className={`border-0 text-gray-800 p-1.5 ${className}`} {...other} />
);
