const express = require('express');
const router = express.Router();

const users = {};

function searchFor(req, res, userName) {

}

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const { userName } = req.body;
    if (!userName) return res.sendStatus(400);

    users[crypto.randomUUID()] = {
        userName: userName,
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
    
});

module.exports = router;