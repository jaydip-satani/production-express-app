# Production Express App CLI

A professional CLI tool to generate a **production-ready Express.js backend** boilerplate with clean architecture, modern folder structure, and dependency setup.

> - Supports JavaScript and TypeScript
> - Choose between CommonJS and ESModule
> - Clean scalable folder structure
> - Pre-configured with `.env`, Docker, ESLint, Prettier, Swagger, and more!

## 📦 Installation

Install globally via npm:

```bash
npm install -g production-express-app
```

## Usage (Recommended)

Use it with npx (no need to install globally):

```bash
npx production-express-app
```

You'll be prompted to select:

- Project name
- Language (JavaScript / TypeScript)
- Module type (CommonJS / ESModule)
- Dependencies to install (express, dotenv, mongoose, cors, helmet)
- Whether to use a `src/` folder or keep files in the root

## 📁 Folder Structure (with `src/`)

```
project-name/
├── src/
│   ├── config/               # App config (DB, env, logger)
│   ├── api/v1/               # Versioned APIs
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── models/
│   │   └── docs/
│   ├── middlewares/
│   ├── utils/
│   ├── constants/
│   ├── jobs/
│   ├── lib/
│   ├── app.js / app.ts
│   └── server.js / server.ts
├── tests/
│   ├── unit/
│   └── integration/
├── scripts/
├── .env
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── swagger.yaml
└── README.md

```

## ⚙️ Features

- ✅ Express app boilerplate
- ✅ TypeScript or JavaScript
- ✅ CommonJS or ESModules
- ✅ `src/` optional
- ✅ Prettier and ESLint preconfigured
- ✅ Swagger/OpenAPI YAML
- ✅ Docker & Compose templates
- ✅ Test folders for unit & integration
- ✅ Modular structure for scaling

## 🔧 Example Output

Here’s a sample run:

```bash
? Enter project name: my-app
? Choose language: TypeScript
? Choose module type: ESModule
? Select dependencies to install: express, dotenv, mongoose
? Do you want to use a 'src' folder? Yes
```

✔ Project created successfully!

---

## 🛠 Dependencies

Supports installing these by default:

- `express`
- `dotenv`
- `mongoose`
- `cors`
- `helmet`

---

## 🧑‍💻 Author

**Jaydip**
Feel free to reach out on [GitHub](https://github.com/jaydip-satani)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

If you like this CLI, give it a ⭐ on [GitHub](https://github.com/jaydip-satani/production-express-app) or share it with others!

[![npm version](https://img.shields.io/npm/v/production-express-app.svg)](https://www.npmjs.com/package/production-express-app)

## [![Support via Razorpay](https://img.shields.io/badge/Buy%20Me%20a%20Chai-%E2%98%95-orange?style=for-the-badge)](https://razorpay.me/@jaydipsatani)
