const express = require('express');

const friendsController = require('./controllers/friends.controllers');

const app = express();

const PORT = 3000;

//logging middleware
app.use((req, res, next) => {
    let start = Date.now();
    next();
    let delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/friends', friendsController.getFriends)
app.get('/friends/:Id', friendsController.getFriends)
app.post('/friends', friendsController.postFriend)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})