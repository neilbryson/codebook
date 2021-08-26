import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from './contexts/Theme';
import { store } from './redux/configureStore';
import { RootView } from './views/RootView';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="w-screen h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
          <RootView />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
