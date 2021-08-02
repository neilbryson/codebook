import React, { ReactElement, ReactNode } from 'react';

import { Header } from '../layouts/Header';

interface Props {
  children: ReactNode;
}

export const MasterView = ({ children }: Props): ReactElement<HTMLDivElement> => {
  return (
    <div>
      <Header />
      <div className="ml-8 mr-8">{children}</div>
    </div>
  );
};
