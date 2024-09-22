const environment = require("./environment");

module.exports = {
  host: "localhost",
  port: 3001, // BrowserSync will run on this port
  open: true, // Automatically open the browser
  reload: false, // Set to true if you want BrowserSync to reload on changes
  proxy: "<PROJECT_URL>", // Placeholder for the script to replace
  https: true, // Since your MAMP URL uses HTTPS
  // If you are using self-signed certificates, you may need to ignore SSL errors:
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  ...environment.server,
};
