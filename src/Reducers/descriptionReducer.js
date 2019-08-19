const intialState = {
  data: {}
};

export const descriptionReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_GITHUB_API_REPO_DATA":
      state.data = action.DATA;
      return { data: state.data };
      break;
    default:
      return { data: state.data };
  }
};
