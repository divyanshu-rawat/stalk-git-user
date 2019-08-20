import * as t from "../Constants";

export const getApiData = (username) => ({
  type: t.GET_GITHUB_API_DATA,
  username
});
