#!/usr/bin/env node

const inquirer = require("inquirer");
const { createProject } = require("../lib/helpers");

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
      default: "express-backend",
    },
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["JavaScript", "TypeScript"],
    },
    {
      type: "list",
      name: "moduleType",
      message: "Choose module type:",
      choices: ["CommonJS", "ESModule"],
    },
    {
      type: "checkbox",
      name: "dependencies",
      message: "Select dependencies to install:",
      choices: ["express", "dotenv", "mongoose", "cors", "helmet"],
    },
    {
      type: "confirm",
      name: "useSrc",
      message: "Do you want to use a 'src' folder?",
      default: true,
    },
  ]);

  await createProject(answers);
};

main();
