const environment = require("./environment");

module.exports = {
  host: "localhost",
  port: 3001, // BrowserSync will run on this port
  open: true, // Automatically open the browser
  reload: false, // Set to true if you want BrowserSync to reload on changes
  proxy: "<PROJECT_URL>", // Placeholder for the script to replace
  // change the path to your local certificate
  // https: {
  //   key: "/Applications/MAMP/conf/ssl/CHANGE HERE.local.key",
  //   cert: "/Applications/MAMP/conf/ssl/CHANGE HERE.local.crt",
  // },
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  ...environment.server,
};
