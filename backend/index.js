const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${parseInt(Date.now()/1000)}] ${req.method} -`, 'received at', req.url);
    next();
});

// Get the routers
const usersRouter = require('./routes/users');
const groupsRouter = require('./routes/groups');

// Use the routers
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);

app.listen(port);