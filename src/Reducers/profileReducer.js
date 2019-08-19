import * as t from "../Constants";

const intialState = {
  data: {}
};

export const userProfileReducer = (state = intialState, action) => {
  switch (action.type) {
    case t.GET_GITHUB_API_DATA:
      state.data = action.DATA;
      return { data: state.data };
      break;
    default:
      return { data: state.data };
  }
};
