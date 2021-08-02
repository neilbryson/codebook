import React, { HTMLAttributes, ReactElement } from 'react';

export const TextInput = ({
  className,
  ...other
}: HTMLAttributes<HTMLInputElement>): ReactElement<HTMLInputElement> => (
  <input className={`border-0 text-gray-800 p-1.5 ${className}`} {...other} />
);
