import * as t from "../../Constants";

const USER_PROFILE_REDUCER = (
  state = { isFetching: false, data: {} },
  action
) => {
  switch (action.type) {
    case t.SET_GITHUB_API_DATA:
      return Object.assign(
        {},
        state,
        { isFetching: false },
        { data: action.data }
      );
      break;
    case t.GET_GITHUB_API_DATA:
      return Object.assign({}, state, { isFetching: true, data: {} });
      break;
    default:
      return state;
  }
};

export default USER_PROFILE_REDUCER;
