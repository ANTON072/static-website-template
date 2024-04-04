require("dotenv").config();

const ENV = process.env.APP_ENV;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      ENV === "production"
        ? {
            preset: "default",
          }
        : false,
  },
};
