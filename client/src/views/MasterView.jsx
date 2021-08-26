import React from 'react';

import { Header } from '../layouts/Header';

export const MasterView = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="mt-4 ml-8 mr-8 mb-4 h-full overflow-auto">{children}</div>
    </div>
  );
};
