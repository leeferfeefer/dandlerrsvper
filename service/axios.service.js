const axios = require("axios");
import Config from "react-native-config";

export const herokuInstance = axios.create({
  baseURL: `${Config.URI}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});