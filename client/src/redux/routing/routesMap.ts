import type { RoutesMap } from 'redux-first-router';

export enum Routes {
  HOME = 'route/HOME',
  CODE_EDITOR = 'route/CODE_EDITOR',
}

export const routesMap: RoutesMap = {
  [Routes.HOME]: {
    path: '/',
  },
  [Routes.CODE_EDITOR]: {
    path: '/code/:id?',
  },
};
