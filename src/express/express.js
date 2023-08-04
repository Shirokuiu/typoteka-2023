'use strict';

const chalk = require(`chalk`);
const path = require(`path`);
const express = require(`express`);
const app = express();
const {DEFAULT_PORT, PUBLIC_DIR} = require(`./constants`);
const mainRoutes = require(`./routes/main-routes`);
const registerRoutes = require(`./routes/register-routes`);
const loginRoutes = require(`./routes/login-routes`);
const myRoutes = require(`./routes/my-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const searchRoutes = require(`./routes/search-routes`);


// Настройка шаблонизатора
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

// Маршрутизация
app.use(`/`, mainRoutes);
app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/my`, myRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/search`, searchRoutes);

app.listen(DEFAULT_PORT, (err) => {
  if (err) {
    console.error(chalk.red(`При создании сервера возникла ошибка`));
    console.error(err);

    return;
  }

  console.log(chalk.green(`Сервер фронтенда успешно создан на порту ${DEFAULT_PORT} http://localhost:${DEFAULT_PORT}`));
});
