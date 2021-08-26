import dayjs from 'dayjs';
import React from 'react';

export const CodePreview = ({ codeId, dateLastModified, fileName, ...other }) => {
  return (
    <div
      className="border border-gray-800 rounded p-2 cursor-pointer hover:bg-gray-300 dark:border-gray-100 dark:hover:bg-gray-700"
      {...other}
    >
      <h2 className="text-lg font-bold">{fileName}</h2>
      <span>{dayjs(dateLastModified).fromNow()}</span>
    </div>
  );
};
