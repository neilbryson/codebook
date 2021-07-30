import React, { createContext, ReactNode, useCallback, useLayoutEffect, useMemo } from 'react';

import { THEME_KEY } from '../constants/storageKeys';

const enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  changeTheme: (toTheme: ThemeTypes) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  changeTheme: () => void 0,
});

export const ThemeProvider = ({ children }: ThemeProviderProps): ReturnType<typeof ThemeContext.Provider> => {
  const changeTheme = useCallback((toTheme: ThemeTypes) => {
    if (toTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }, []);

  const contextValues = useMemo(
    () => ({
      changeTheme,
    }),
    [changeTheme]
  );

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
  });

  return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
};
