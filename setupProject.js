const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Function to prompt user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

// Paths to configuration files inside the config folder
const browserSyncConfigPath = path.join(
  __dirname,
  "config",
  "browser-sync.config.js",
); // Path to browser-sync config
const webpackDevConfigPath = path.join(
  __dirname,
  "config",
  "webpack.dev.config.js",
); // Path to webpack dev config

// Function to update proxy URLs in both configuration files
const updateConfigFiles = (projectName) => {
  const localURL = `https://${projectName}.local:8890`;

  // Update browser-sync.config.js
  let browserSyncConfig = fs.readFileSync(browserSyncConfigPath, "utf8");
  browserSyncConfig = browserSyncConfig.replace(
    /proxy: "<PROJECT_URL>"/,
    `proxy: "${localURL}"`,
  );
  fs.writeFileSync(browserSyncConfigPath, browserSyncConfig);

  // Update webpack.dev.config.js
  let webpackDevConfig = fs.readFileSync(webpackDevConfigPath, "utf8");
  webpackDevConfig = webpackDevConfig.replace(
    /proxy: "<PROJECT_URL>"/,
    `proxy: "${localURL}"`,
  );
  fs.writeFileSync(webpackDevConfigPath, webpackDevConfig);

  console.log(`Proxy URLs have been updated to: ${localURL}`);
};

// Main function to run the script
const main = async () => {
  const projectName = await askQuestion(
    "Enter the project name (e.g., 'brad-university'): ",
  );
  updateConfigFiles(projectName);
  rl.close();
};

main();
