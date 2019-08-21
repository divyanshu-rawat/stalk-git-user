import axios from "axios";

export async function getApiData(name) {
  try {
    return await axios
      .all([
        axios.get("https://api.github.com/users/" + name),
        axios.get(
          "https://api.github.com/users/" + name + "/events?per_page=" + 20
        ),
        axios.get(
          "https://api.github.com/users/" + name + "/repos?per_page=100"
        )
      ])
      .then(
        axios.spread(
          (userProfileInformation, userActivityStatstics, userRepositories) => {
            return {
              userProfileInformation: userProfileInformation.data,
              userActivityStatstics: userActivityStatstics.data,
              userRepositories: userRepositories.data
            };
          }
        )
      )
      .catch(err => {
        console.log(err);
      });
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}
