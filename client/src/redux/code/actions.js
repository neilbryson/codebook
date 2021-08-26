import { api } from '../../utilities/api';
import { ThunkActions } from './types';

export function getCodeList(pageSize = 0, pageNumber = 1, sortDescending = true) {
  return async (dispatch) => {
    dispatch({
      type: ThunkActions.GET_CODE_LIST_START,
    });
    const sortBy = sortDescending ? 1 : 0;

    try {
      const { data } = await api({
        url: `/api/v1/code?sortBy=${sortBy}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        method: 'get',
      });
      dispatch({
        payload: data,
        type: ThunkActions.GET_CODE_LIST_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ThunkActions.GET_CODE_LIST_ERROR,
      });
    }
  };
}
