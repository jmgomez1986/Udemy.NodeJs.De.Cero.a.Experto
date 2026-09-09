const { getUUID } = require("../plugins/get-id.plugin");
const { getAge } = require("../plugins/get-age.plugin");
const { httpClient } = require("../plugins/http-client-plugin");

module.exports = {
  getUUID,
  getAge,
  httpClient,
};
