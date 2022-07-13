import Strapi from "@strapi/strapi";

let instance;

export async function setupStrapi() {
  if (instance) {
    await instance.destroy();
  }

  // XX:: need to set appDir and distDir
  // explicitly for TS to work
  await Strapi({
    appDir: ".",
    distDir: "./dist",
  }).load();
  instance = strapi;

  return instance;
}
