import React, { ReactElement } from 'react';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

export const Header = (): ReactElement => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 h-12 flex items-center justify-between pl-8 pr-8">
      <h1 className="text-3xl">Codebook</h1>
      <div>
        <ThemeSwitcher />
      </div>
    </section>
  );
};
