const fs = require("fs");
const { setupStrapi } = require("./helpers/strapi");

module.exports = async function (globalConfig, projectConfig) {
  const tmpDbFile = `${process.cwd()}/.tmp/data.db`;

  if (fs.existsSync(tmpDbFile)) {
    fs.unlinkSync(tmpDbFile);
  }

  await setupStrapi();
};
