import axios from "axios";

export  async function Integration(url, params, config, method) {
  let endpoint = "RUTA DE BACK REST API " + url;
  let resp;
  if (method == "post") {
    await axios
      .post(endpoint, params, config)
      .then((response) => {
        resp = response.data;
      })
      .catch((response) => {
        return false;
      });
  } else {
    await axios
      .get(endpoint, params, config)
      .then((response) => {
        return response.data;
      })
      .catch((response) => {
        return false;
      });
  }
  return resp;
}
