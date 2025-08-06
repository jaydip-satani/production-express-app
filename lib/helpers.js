const fs = require("fs-extra");
const path = require("path");
const execa = require("execa");
const chalk = require("chalk");

const createProject = async ({
  projectName,
  language,
  moduleType,
  dependencies,
  useSrc,
}) => {
  const isTS = language === "TypeScript";
  const ext = isTS ? "ts" : "js";

  const root = path.join(process.cwd(), projectName);
  await fs.ensureDir(root);
  process.chdir(root);

  console.log(chalk.blue(`\nCreating project in ${root}\n`));
  await execa("npm", ["init", "-y"]);

  const pkgPath = path.join(root, "package.json");
  const pkg = await fs.readJson(pkgPath);
  pkg.type = moduleType === "ESModule" ? "module" : undefined;
  await fs.writeJson(pkgPath, pkg, { spaces: 2 });

  if (dependencies.length > 0) {
    console.log(chalk.green("Installing dependencies..."));
    await execa("npm", ["install", ...dependencies]);
  }

  const basePath = useSrc ? "src" : ".";

  const folders = [
    `${basePath}/config`,
    `${basePath}/api/v1/controllers`,
    `${basePath}/api/v1/routes`,
    `${basePath}/api/v1/services`,
    `${basePath}/api/v1/validators`,
    `${basePath}/api/v1/models`,
    `${basePath}/api/v1/docs`,
    `${basePath}/middlewares`,
    `${basePath}/utils`,
    `${basePath}/constants`,
    `${basePath}/jobs`,
    `${basePath}/lib`,
    `tests/unit`,
    `tests/integration`,
    `scripts`,
  ];

  for (const folder of folders) {
    await fs.ensureDir(path.join(root, folder));
  }

  const files = {
    [`${basePath}/config/db.${ext}`]: `// DB config`,
    [`${basePath}/config/env.${ext}`]: `// Env config`,
    [`${basePath}/config/logger.${ext}`]: `// Logger setup`,
    [`${basePath}/api/v1/controllers/user.controller.${ext}`]: `// User controller`,
    [`${basePath}/api/v1/routes/user.routes.${ext}`]: `// User routes`,
    [`${basePath}/api/v1/services/user.service.${ext}`]: `// User service`,
    [`${basePath}/api/v1/validators/user.validator.${ext}`]: `// User validator`,
    [`${basePath}/api/v1/models/user.model.${ext}`]: `// User model`,
    [`${basePath}/middlewares/error.middleware.${ext}`]: `// Error middleware`,
    [`${basePath}/middlewares/auth.middleware.${ext}`]: `// Auth middleware`,
    [`${basePath}/middlewares/validate.middleware.${ext}`]: `// Validation middleware`,
    [`${basePath}/utils/logger.${ext}`]: `// Reusable logger`,
    [`${basePath}/utils/hash.${ext}`]: `// Hash utility`,
    [`${basePath}/constants/messages.${ext}`]: `// Message constants`,
    [`${basePath}/jobs/cleanup.job.${ext}`]: `// Scheduled job`,
    [`${basePath}/lib/apiClient.${ext}`]: `// API client setup`,
    [`${basePath}/app.${ext}`]: `// Express app config`,
    [`${basePath}/server.${ext}`]: `// Entry point to start server`,
    [`tests/unit/user.service.test.${ext}`]: `// Unit test for user service`,
    [`tests/integration/user.routes.test.${ext}`]: `// Integration test for user routes`,
    [`scripts/seed.${ext}`]: `// DB seed script`,
    [`.env`]: ``,
    [`.env.example`]: `PORT=3000`,
    [`Dockerfile`]: `# Dockerfile`,
    [`docker-compose.yml`]: `# docker-compose`,
    [`.gitignore`]: `node_modules\n.env`,
    [`.eslintrc.js`]: `module.exports = { env: { node: true }, extends: [], rules: {} };`,
    [`.prettierrc`]: `{ "semi": true, "singleQuote": true }`,
    [`swagger.yaml`]: `# Swagger/OpenAPI spec`,
    [`README.md`]: `# ${projectName}`,
  };

  for (const [file, content] of Object.entries(files)) {
    await fs.outputFile(path.join(root, file), content);
  }

  console.log(chalk.green("\nProject created successfully!\n"));
};

module.exports = { createProject };
