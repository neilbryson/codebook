import React, { ReactElement } from 'react';

import { ThemeTypes, useTheme } from '../contexts/Theme';

export const ThemeSwitcher = (): ReactElement<HTMLDivElement> => {
  const { changeTheme, currentTheme } = useTheme();

  function toggle(): void {
    if (currentTheme === ThemeTypes.DARK) changeTheme(ThemeTypes.LIGHT);
    else changeTheme(ThemeTypes.DARK);
  }

  function renderSelection(themeType: ThemeTypes, character: string): ReactElement<HTMLSpanElement> {
    return (
      <span className={`${themeType === currentTheme ? 'text-3xl' : 'text-md'} select-none`} onClick={toggle}>
        {character}
      </span>
    );
  }

  return (
    <div onClick={toggle} title="Click to toggle theme">
      {renderSelection(ThemeTypes.LIGHT, '🌞')}
      {renderSelection(ThemeTypes.DARK, '🌜')}︎
    </div>
  );
};
