
import * as t from '../Constants';

const intialState = {
  data: {}
};

export const descriptionReducer = (state = intialState, action) => {
	console.log('action',action)
  switch (action.type) {
    case "GET_GITHUB_API_REPO_DATA":
      state.data = action.DATA;
      return { data: state.data };
      break;
    default:
      return { data: state.data };
  }
};
