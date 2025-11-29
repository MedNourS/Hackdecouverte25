const express = require('express');
const router = express.Router();

groups = {}

function exists(groupID) {
    for (let groupID in groups) {
        if (String(groups[groupID].groupName) === groupName) return true;
    }
    return false;
}

router.get('/', (req, res) => {
    res.send(groups);
});

router.post('/', (req, res) => {
    const { groupName, groupDescription } = req.body;
    if (!groupName) return res.sendStatus(400);
    if (exists(groupName)) return res.status(403).send('Cannot make multiple groups with the same groupname');

    groups[crypto.randomUUID()] = {
        groupName: groupName,
        members: [],
        studySessions: []
    }
    res.sendStatus(200);
});

router.delete('/', (req, res) => {
    const { groupID } = req.body;
    if (!groupID) return res.sendStatus(400);
    if (!groups[groupID]) return res.sendStatus(404);

    delete groups[groupID];
    res.sendStatus(200);
});

router.get('/search', (req, res) => {
    const { groupName } = req.body;
    if (!groupName) return res.sendStatus(400);
    for (let groupID in groups) {
        if (String(groups[groupID].groupName) === groupName) res.send({groupID: groupID});
    }
    res.sendStatus(404);
});

module.exports = router;