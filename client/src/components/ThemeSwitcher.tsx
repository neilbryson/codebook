import React, { ReactElement } from 'react';

import { ThemeTypes, useTheme } from '../contexts/Theme';

export const ThemeSwitcher = (): ReactElement<HTMLDivElement> => {
  const { changeTheme, currentTheme } = useTheme();

  function toggle(): void {
    if (currentTheme === ThemeTypes.DARK) changeTheme(ThemeTypes.LIGHT);
    else changeTheme(ThemeTypes.DARK);
  }

  return (
    <div onClick={toggle} title="Click to toggle theme">
      <span className="cursor-pointer select-none text-2xl" onClick={toggle}>
        {currentTheme === ThemeTypes.LIGHT ? '🌞' : '🌜'}
      </span>
    </div>
  );
};
