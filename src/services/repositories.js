const axios = require("axios");

const listRepositories = (githudName) => {
  const request = axios.get(`https://api.github.com/users/${githudName}/repos`);
  return request;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { listRepositories };
