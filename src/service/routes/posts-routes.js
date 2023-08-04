'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../constants`);
const postsRouter = new Router();

postsRouter.get(`/`, (req, res) => {
  res.status(HttpCode.OK).json({"id": 1});
});

module.exports = postsRouter;
