const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: "Sly Ativi"
    },
    {
        id: 2,
        name: "Kuuku Van"
    },
    {
        id: 3,
        name: "Fred Macleen"
    }
]
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

app.get('/friends', (req, res) => {
    
    if (friends.length > 0)
    {
        res.status(200).json(friends);
    }
    else
    {
        res.status(204).json({
            error : "Friend does not exist"
        });
    }
})

app.get('/friends/:Id', (req, res) => {
    const friendId = Number(req.params.Id);
    const friend = friends[friendId];

    if (friend)
    {
        res.status(200).json(friend);
    }
    else
    {
        res.status(404).json({
            error : "Friend does not exist"
        });
    }
})

app.post('/friends', (req, res) => {
    
    if (!req.body.name) {
       return res.status(400).json({
            error: 'Name is missing'
        })
    }
    let friend = {
        name : req.body.name,
        id: friends.length
    };
    friends.push(friend);

    res.json(friend);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})