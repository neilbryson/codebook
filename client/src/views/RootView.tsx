import React, { ReactElement } from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { useAppSelector } from '../hooks/redux';
import { Routes } from '../redux/routing/routesMap';
import { CodeEditorView } from './CodeEditorView';
import { HomeView } from './HomeView';

export const RootView = (): ReactElement | null => {
  const locationType = useAppSelector((state) => state.location.type);

  switch (locationType) {
    case Routes.HOME:
      return <HomeView />;
    case Routes.CODE_EDITOR:
      return <CodeEditorView />;
    case NOT_FOUND:
    default:
      return null;
  }
};
