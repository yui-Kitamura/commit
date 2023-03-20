import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../package.json");

const github = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    accept: `application/vnd.github.v3+json`,
    authorization: `bearer ${process.env.GH_TOKEN}`,
    "user-agent": `${pkg.name}/${pkg.version}`,
  },
  maxBodyLength: 2000000000, //2GB
  maxContentLength: 2000000000
});

export default github;
