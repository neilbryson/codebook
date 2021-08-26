import type { Action } from '../../types/Redux';

export const enum ThunkActions {
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
