import { ThunkActions } from './types';

const initialState = {
  codeIds: [],
  codeList: {},
};

export function code(state = initialState, action) {
  switch (action.type) {
    case ThunkActions.GET_CODE_LIST_SUCCESS: {
      const { codeIds, codeList } = action.payload.reduce(
        (prev, curr) => {
          prev.codeIds.push(curr.id);
          prev.codeList[curr.id] = curr;
          return prev;
        },
        {
          codeIds: [],
          codeList: {},
        }
      );
      return { ...state, codeList, codeIds };
    }

    default:
      return state;
  }
}
