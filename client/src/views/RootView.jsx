import React from 'react';
import { useSelector } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';

import { Routes } from '../redux/routing/routesMap';
import { CodeEditorView } from './CodeEditorView';
import { HomeView } from './HomeView';
import { MasterView } from './MasterView';

function wrapMasterView(tree) {
  return <MasterView>{tree}</MasterView>;
}

export const RootView = () => {
  const locationType = useSelector((state) => state.location.type);

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
