module.exports = {
  content: [
    "./**/*.php", // All PHP files in your theme/plugin
    "./src/**/*.js", // All JavaScript files in your src folder
    "./templates/**/*.php", // If you use a templates folder for custom theme files
    "./inc/**/*.php", // If you have an includes folder for custom functionality
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
