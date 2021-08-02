import React, { ReactElement, ReactNode } from 'react';

import { Header } from '../layouts/Header';

interface Props {
  children: ReactNode;
}

export const MasterView = ({ children }: Props): ReactElement<HTMLDivElement> => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="mt-4 ml-8 mr-8 mb-4 h-full overflow-hidden">{children}</div>
    </div>
  );
};
