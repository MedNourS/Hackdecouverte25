const express = require('express');
const router = express.Router();

const groups = {
    'd760bbea-20e0-447d-acf5-764e0052dba3': {
        groupName: "Programmers' Studying Group",
        groupDescription: 'A group dedicated to studying programming together.',
        members: [
            '0f03e050-4e48-4249-a5e1-e5ecdd067d5d'
        ],
        studySessions: []
    }
}

function exists(groupName) {
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
    if (exists(groupName)) return res.status(403).send('Cannot make multiple groups with the same name');

    groups[crypto.randomUUID()] = {
        groupName,
        groupDescription,
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
        if (String(groups[groupID].groupName) === groupName) res.send({ groupID: groupID });
    }
    res.sendStatus(404);
});

router.post('/addUser', (req, res) => {
    const { groupID, userID } = req.body;
    if (!groupID || !userID) return res.sendStatus(400);
    groups[groupID].members.push(userID);
    res.sendStatus(200);
});

router.post('/addSession', (req, res) => {
    const { groupID, studySessionID } = req.body;

    if (!groupID || !studySessionID) return res.sendStatus(400);

    fetch(`http://localhost:3000/session/exists?studySessionID=${studySessionID}`)
        .then(res => res.json())
        .then(data => {
            if (data.exists !== true) return res.sendStatus(404);
            if (!groups[groupID].studySessions.includes(studySessionID)) {
                groups[groupID].studySessions.push(studySessionID);
            }
            res.sendStatus(200);
        })
        .catch(err => res.sendStatus(400));
});

router.post('/setDescription', (req, res) => {
    const { groupID, groupDescription } = req.body;
    if (!groupID || !groupDescription) return res.sendStatus(400);
    if (!groups[groupID]) return res.sendStatus(404);

    groups[groupID].groupDescription = groupDescription;
    res.sendStatus(200);
});

module.exports = router;