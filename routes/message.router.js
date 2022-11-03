const express = require('express');
const messagesController = require('./controllers/messages.controllers');

const messagesRouter = express.router();

messagesRouter.get('/messages', messagesController.getFriends);
messagesRouter.get('/messages/:Id', messagesController.getFriends);
messagesRouter.post('/messages', messagesController.postFriend);

module.exports = friendsRouter;