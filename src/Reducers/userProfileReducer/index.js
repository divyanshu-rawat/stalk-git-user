import * as t from "../../Constants";

const USER_PROFILE_REDUCER = (state = {}, action) => {
  switch (action.type) {
    case t.GET_GITHUB_API_DATA:
      state = action.DATA;
      return state;
      break;
    default:
      return state;
  }
};

export default USER_PROFILE_REDUCER;
