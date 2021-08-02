import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { navigateTo } from '../redux/routing/navigateTo';
import { Routes } from '../redux/routing/routesMap';

export const Header = (): ReactElement => {
  const dispatch = useDispatch();

  function onClickHome(): void {
    dispatch(navigateTo(Routes.HOME));
  }

  return (
    <section className="bg-gray-200 dark:bg-gray-800 h-12 flex items-center justify-between pl-8 pr-8">
      <h1 className="text-3xl cursor-pointer" title="Codebook home" onClick={onClickHome}>
        Codebook
      </h1>
      <div>
        <ThemeSwitcher />
      </div>
    </section>
  );
};
