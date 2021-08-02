import type { ThunkAction } from '../../types/Redux';
import { api } from '../../utilities/api';
import * as types from './types';

export function addCode(
  fileName: string,
  sourceCode: string
): ThunkAction<types.AddCodeStart | types.AddCodeSuccess | types.AddCodeError> {
  return async (dispatch) => {
    dispatch({ type: types.ThunkActions.ADD_CODE_START });

    try {
      const { data } = await api<types.CodeItem>({
        data: { fileName, sourceCode },
        method: 'post',
        url: '/api/v1/code',
      });
      dispatch({ payload: data, type: types.ThunkActions.ADD_CODE_SUCCESS });
    } catch (e: unknown) {
      dispatch({ type: types.ThunkActions.ADD_CODE_ERROR });
    }
  };
}

export function getCodeList(
  pageSize = 0,
  pageNumber = 1,
  sortDescending = true
): ThunkAction<types.GetCodeListStart | types.GetCodeListSuccess | types.GetCodeListError> {
  return async (dispatch) => {
    dispatch({ type: types.ThunkActions.GET_CODE_LIST_START });

    const sortBy = sortDescending ? 1 : 0;

    try {
      const { data } = await api<types.CodeItem[]>({
        url: `/api/v1/code?sortBy=${sortBy}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        method: 'get',
      });

      dispatch({ payload: data, type: types.ThunkActions.GET_CODE_LIST_SUCCESS });
    } catch (e: unknown) {
      dispatch({ type: types.ThunkActions.GET_CODE_LIST_ERROR });
    }
  };
}
