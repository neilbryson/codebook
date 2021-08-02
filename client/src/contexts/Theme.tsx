import React, { createContext, ReactNode, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

import { THEME_KEY } from '../constants/storageKeys';

export const enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  changeTheme: (toTheme: ThemeTypes) => void;
  currentTheme: ThemeTypes;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  changeTheme: () => void 0,
  currentTheme: ThemeTypes.DARK,
});

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps): ReturnType<typeof ThemeContext.Provider> => {
  const [currentTheme, setCurrentTheme] = useState(ThemeTypes.LIGHT);

  const changeTheme = useCallback((toTheme: ThemeTypes) => {
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
