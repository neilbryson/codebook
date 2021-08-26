import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

import { THEME_KEY } from '../constants/storageKeys';

export const ThemeTypes = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeContext = createContext({
  changeTheme: () => void 0,
  currentTheme: ThemeTypes.DARK,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(ThemeTypes.LIGHT);
  const changeTheme = useCallback((toTheme) => {
    if (toTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
      setCurrentTheme(ThemeTypes.DARK);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
      setCurrentTheme(ThemeTypes.LIGHT);
    }
  }, []);
  const contextValues = useMemo(
    () => ({
      changeTheme,
      currentTheme,
    }),
    [changeTheme, currentTheme]
  );
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setCurrentTheme(ThemeTypes.DARK);
      return;
    }

    document.documentElement.classList.remove('dark');
    setCurrentTheme(ThemeTypes.LIGHT);
  }, []);
  return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
};
