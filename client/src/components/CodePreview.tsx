import dayjs from 'dayjs';
import React, { HTMLAttributes } from 'react';

interface Props {
  codeId: string;
  dateLastModified: string;
  fileName: string;
}

export const CodePreview = ({
  codeId,
  dateLastModified,
  fileName,
  ...other
}: Props & Omit<HTMLAttributes<HTMLDivElement>, 'children'>) => {
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
