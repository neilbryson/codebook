import React from 'react';

export const TextInput = ({ className, ...other }) => (
  <input className={`border-0 text-gray-800 p-1.5 ${className}`} {...other} />
);
