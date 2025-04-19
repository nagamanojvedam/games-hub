import axios from "axios";

const apiURL = "https://api.rawg.io/api";

export const getData = async (endPoint, query = {}) => {
  const response = await axios.get(endPoint, {
    baseURL: apiURL,
    params: {
      key: "6b557865c51a4e26b75068465a72ffb1",
      ...query,
    },
  });
  console.log(response);
  const { results } = response.data;
  return results;
};
