const express = require('express');
const router = express.Router();

const users = {
    "0f03e050-4e48-4249-a5e1-e5ecdd067d5d": {
        userName: "Administrator",
        groups: []
    }
};

function exists(userName) {
    for (let userID in users) {
        if (String(users[userID].userName) === userName) return true;
    }
    return false;
}

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const { userName } = req.body;
    if (!userName) return res.sendStatus(400);
    if (exists(userName)) return res.status(403).send('Cannot make multiple users with the same username');

    users[crypto.randomUUID()] = {
        userName,
        groups: []
    }
    res.sendStatus(200);
});

router.delete('/', (req, res) => {
    const { userID } = req.body;
    if (!userID) return res.sendStatus(400);
    if (!users[userID]) return res.sendStatus(404);

    delete users[userID];
    res.sendStatus(200);
});

router.get('/search', (req, res) => {
    const { userName } = req.body;
    if (!userName) return res.sendStatus(400);
    for (let userID in users) {
        if (String(users[userID].userName) === userName) res.send({ userID: userID });
    }
    res.sendStatus(404);
});

module.exports = router;