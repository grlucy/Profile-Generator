// Require inquirer, electron-html-to, fs, util

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const electron = require("electron-html-to");

const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user for GitHub user name.
// The user will be prompted for a favorite color, which will be used as the background color for cards.

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    }
  ]);
}

async function init() {
  try {
    const userData = await promptUser();
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
}

init();

// The PDF will be populated with the following:
// Profile image
// User name
// Links to the following:
//   User location via Google Maps
//   User GitHub profile
//   User blog
// User bio
// Number of public repositories
// Number of followers
// Number of GitHub stars
// Number of users following
