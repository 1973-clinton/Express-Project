const express = require('express');
const friendsController = require('./controllers/friends.controllers');

const friendsRouter = express.router();

friendsRouter.get('/friends', friendsController.getFriends);
friendsRouter.get('/friends/:Id', friendsController.getFriends);
friendsRouter.post('/friends', friendsController.postFriend);

module.exports = friendsRouter;