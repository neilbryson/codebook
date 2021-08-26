export const Routes = {
  HOME: 'route/HOME',
  CODE_EDITOR: 'route/CODE_EDITOR',
};

export const routesMap = {
  [Routes.HOME]: {
    path: '/',
  },
  [Routes.CODE_EDITOR]: {
    path: '/code/:id?',
  },
};
