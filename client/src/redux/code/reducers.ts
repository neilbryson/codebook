import * as types from './types';

const initialState: types.CodeState = {
  codeIds: [],
  codeList: {},
};

export function code(state = initialState, action: types.CodeActions): types.CodeState {
  switch (action.type) {
    case types.ThunkActions.ADD_CODE_SUCCESS: {
      const id = action.payload.id;
      return { ...state, codeIds: [...state.codeIds, id], codeList: { ...state.codeList, [id]: action.payload } };
    }
    case types.ThunkActions.GET_CODE_LIST_SUCCESS: {
      const { codeIds, codeList } = action.payload.reduce<{ codeIds: string[]; codeList: types.CodeState['codeList'] }>(
        (prev, curr) => {
          prev.codeIds.push(curr.id);
          prev.codeList[curr.id] = curr;
          return prev;
        },
        { codeIds: [], codeList: {} }
      );
      return { ...state, codeList, codeIds };
    }
    default:
      return state;
  }
}
