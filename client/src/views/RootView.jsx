import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { useAppSelector } from '../hooks/redux';
import { Routes } from '../redux/routing/routesMap';
import { CodeEditorView } from './CodeEditorView';
import { HomeView } from './HomeView';
import { MasterView } from './MasterView';

function wrapMasterView(tree) {
  return <MasterView>{tree}</MasterView>;
}

export const RootView = () => {
  const locationType = useAppSelector((state) => state.location.type);

  switch (locationType) {
    case Routes.HOME:
      return wrapMasterView(<HomeView />);
    case Routes.CODE_EDITOR:
      return wrapMasterView(<CodeEditorView />);
    case NOT_FOUND:
    default:
      return null;
  }
};
