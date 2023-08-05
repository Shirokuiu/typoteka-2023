'use strict';

const {Router} = require(`express`);
const {HttpCode, mocks} = require(`../constants`);

const postsRouter = new Router();

postsRouter.get(`/`, (req, res) => {
  if (!mocks && !mocks.posts) {
    res.status(HttpCode.OK).send([]);

    return;
  }

  res.status(HttpCode.OK).json(mocks.posts);
});

module.exports = postsRouter;
