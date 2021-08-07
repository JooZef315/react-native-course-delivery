import axios from "axios";

const Client = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 5000,
});

export default Client;
