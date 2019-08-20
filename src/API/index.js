import axios from "axios";

export async function getApiData(username) {
  console.log("username", username);
  const URL = `https://api.github.com/users/${username}`;
  try {
    const { data } = await axios(URL);
    return data;
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}
