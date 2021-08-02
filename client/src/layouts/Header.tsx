import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Divider } from '../components/Divider';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { navigateTo } from '../redux/routing/navigateTo';
import { Routes } from '../redux/routing/routesMap';

export const Header = (): ReactElement => {
  const dispatch = useDispatch();

  function onClickHome(): void {
    dispatch(navigateTo(Routes.HOME));
  }

  function onClickAdd(): void {
    dispatch(navigateTo(Routes.CODE_EDITOR));
  }

  return (
    <section className="text-gray-200 bg-gray-600 h-12 flex items-center justify-between pl-8 pr-8">
      <h1 className="text-3xl cursor-pointer" title="Codebook home" onClick={onClickHome}>
        Codebook
      </h1>
      <div className="flex items-center">
        <span className="text-2xl cursor-pointer" onClick={onClickAdd}>
          ➕
        </span>
        <Divider />
        <ThemeSwitcher />
      </div>
    </section>
  );
};
