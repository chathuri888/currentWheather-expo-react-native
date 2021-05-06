import createReducer from "app/lib/createReducer";
import * as types from "app/store/actions/types";

const initialState = {
  wheatherList: [],
  selectedFVID: [],
};

const setFAV = (state: any, action: any) => {
  if (state.selectedFVID.includes(action.payload)) {
    const filter = state.selectedFVID.filter(function (item) {
      return item !== action.payload;
    });

    return {
      ...state,
      selectedFVID: filter,
    };
  }
  {
    return {
      ...state,
      selectedFVID: [...state.selectedFVID, action.payload],
    };
  }
};

export const commonReducerS = createReducer(initialState, {
  [types.CURRENT_LOCATION_REQUEST](state, action) {
    return {
      ...state,
      wheatherList: action.response.list,
    };
  },
  [types.FV_REQUEST](state, action) {
    return setFAV(state, action);
  },
});
