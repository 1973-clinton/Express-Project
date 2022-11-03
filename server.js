const express = require('express');
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

app.use('/friends', friendsRouter);

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})