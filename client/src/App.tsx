import React, { ReactElement } from 'react';

import { ThemeProvider } from './contexts/Theme';

export const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <div className="w-screen h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100">Hello world</div>
    </ThemeProvider>
  );
};
