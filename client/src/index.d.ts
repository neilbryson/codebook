declare module 'constants/storageKeys' {
  export const THEME_KEY = 'codebook-theme';
}

declare module 'contexts/Theme' {
  import React, { ReactNode } from 'react';
  export enum ThemeTypes {
    LIGHT = 'light',
    DARK = 'dark',
  }
  interface ThemeContextProps {
    changeTheme: (toTheme: ThemeTypes) => void;
    currentTheme: ThemeTypes;
  }
  interface ThemeProviderProps {
    children: ReactNode;
  }
  export const ThemeContext: React.Context<ThemeContextProps>;
  export const useTheme: () => ThemeContextProps;
  export const ThemeProvider: ({ children }: ThemeProviderProps) => ReturnType<typeof ThemeContext.Provider>;
}

declare module 'types/Redux' {
  import type { Action as ReduxAction } from 'redux';
  import type { ThunkAction as TAction } from 'redux-thunk';
  import type { RootState } from 'redux/configureStore';
  export type Action<T, P extends unknown = undefined> = P extends undefined
    ? ReduxAction<T>
    : ReduxAction<T> & {
        payload: P;
      };
  export type ThunkAction<A extends ReduxAction> = TAction<void, RootState, void, A>;
}

declare module 'redux/code/types' {
  import type { Action } from 'types/Redux';
  export enum ThunkActions {
    ADD_CODE_START = 'code/ADD_CODE_START',
    ADD_CODE_SUCCESS = 'code/ADD_CODE_SUCCESS',
    ADD_CODE_ERROR = 'code/ADD_CODE_ERROR',
    GET_CODE_LIST_START = 'code/GET_CODE_LIST_START',
    GET_CODE_LIST_SUCCESS = 'code/GET_CODE_LIST_SUCCESS',
    GET_CODE_LIST_ERROR = 'code/GET_CODE_LIST_ERROR',
  }
  export interface CodeItem {
    dateLastModified: string;
    fileName: string;
    id: string;
    source: string;
  }
  export interface CodeState {
    codeIds: readonly string[];
    codeList: Record<string, CodeItem>;
  }
  export type AddCodeStart = Action<ThunkActions.ADD_CODE_START>;
  export type AddCodeSuccess = Action<ThunkActions.ADD_CODE_SUCCESS, CodeItem>;
  export type AddCodeError = Action<ThunkActions.ADD_CODE_ERROR>;
  export type GetCodeListStart = Action<ThunkActions.GET_CODE_LIST_START>;
  export type GetCodeListSuccess = Action<ThunkActions.GET_CODE_LIST_SUCCESS, CodeItem[]>;
  export type GetCodeListError = Action<ThunkActions.GET_CODE_LIST_ERROR>;
  export type CodeActions =
    | AddCodeStart
    | AddCodeSuccess
    | AddCodeError
    | GetCodeListStart
    | GetCodeListSuccess
    | GetCodeListError;
}

declare module 'redux/code/reducers' {
  import * as types from 'redux/code/types';
  export function code(state: types.CodeState | undefined, action: types.CodeActions): types.CodeState;
}

declare module 'redux/rootReducer' {
  import { code } from 'redux/code/reducers';
  export const rootReducer: {
    code: typeof code;
  };
}

declare module 'redux/routing/routesMap' {
  import type { RoutesMap } from 'redux-first-router';
  export enum Routes {
    HOME = 'route/HOME',
    CODE_EDITOR = 'route/CODE_EDITOR',
  }
  export const routesMap: RoutesMap;
}

declare module 'redux/configureStore' {
  export const store: import('redux').Store<
    import('redux').EmptyObject & {
      location: import('redux-first-router').LocationState<{}, any>;
      code: import('src/redux/code/types').CodeState;
    },
    import('redux').AnyAction | import('redux/code/types').CodeActions
  >;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = ReturnType<typeof store.dispatch>;
}

declare module 'components/Button' {
  import { ButtonHTMLAttributes, ReactElement } from 'react';
  export const Button: ({
    className,
    ...other
  }: ButtonHTMLAttributes<HTMLButtonElement>) => ReactElement<HTMLButtonElement>;
}

declare module 'components/TextInput' {
  import { InputHTMLAttributes, ReactElement } from 'react';
  export const TextInput: ({
    className,
    ...other
  }: InputHTMLAttributes<HTMLInputElement>) => ReactElement<HTMLInputElement>;
}

declare module 'utilities/detectLanguage' {
  export function detectLanguage(fileName: string): string;
}

declare module 'views/CodeEditorView' {
  import { ReactElement } from 'react';
  export const CodeEditorView: () => ReactElement<HTMLElement>;
}

declare module 'components/CodePreview' {
  import { HTMLAttributes } from 'react';
  interface Props {
    codeId: string;
    dateLastModified: string;
    fileName: string;
  }
  export const CodePreview: ({
    codeId,
    dateLastModified,
    fileName,
    ...other
  }: Props & Omit<HTMLAttributes<HTMLDivElement>, 'children'>) => JSX.Element;
}
declare module 'utilities/api' {
  import { AxiosRequestConfig, AxiosResponse } from 'axios';
  export function api<T extends unknown = Record<string, unknown>>(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
}

declare module 'redux/code/actions' {
  import type { ThunkAction } from 'types/Redux';
  import * as types from 'redux/code/types';
  export function getCodeList(
    pageSize?: number,
    pageNumber?: number,
    sortDescending?: boolean
  ): ThunkAction<types.GetCodeListStart | types.GetCodeListSuccess | types.GetCodeListError>;
}

declare module 'redux/routing/navigateTo' {
  import type { ActionMetaLocation, Meta } from 'redux-first-router';
  import { Routes } from 'redux/routing/routesMap';
  export function navigateTo(
    route: Routes,
    payload?: Record<string, unknown>,
    meta?: Partial<ActionMetaLocation & Meta>
  ): {
    meta: Partial<ActionMetaLocation & Meta> | undefined;
    payload: Record<string, unknown>;
    type: Routes;
  };
}

declare module 'views/HomeView' {
  import { ReactElement } from 'react';
  export const HomeView: () => ReactElement;
}

declare module 'components/Divider' {
  export const Divider: () => JSX.Element;
}

declare module 'components/ThemeSwitcher' {
  import { ReactElement } from 'react';
  export const ThemeSwitcher: () => ReactElement<HTMLDivElement>;
}

declare module 'layouts/Header' {
  import { ReactElement } from 'react';
  export const Header: () => ReactElement;
}

declare module 'views/MasterView' {
  import { ReactElement, ReactNode } from 'react';
  interface Props {
    children: ReactNode;
  }
  export const MasterView: ({ children }: Props) => ReactElement<HTMLDivElement>;
}

declare module 'views/RootView' {
  import { ReactElement } from 'react';
  export const RootView: () => ReactElement | null;
}

declare module 'App' {
  import { ReactElement } from 'react';
  export const App: () => ReactElement;
}
