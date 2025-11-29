const express = require('express');
const router = express.Router();

const studySessions = {
    "f13ab819-eeb1-4bde-8434-ecee7e20a7d0": {
        studySessionTitle: "Learning Express JS",
        studySessionDescription: "For Backend Servers",
        studySessionGroupID: "",
        interestedUsers: [],
        startTime: -1,
        endTime: -1,
        isRemote: false,
        location: ""
    }
};

router.get('/', (req, res) => {
    res.send(studySessions);
});

router.post('/', (req, res) => {
    const {
        studySessionTitle,
        studySessionDescription,
        studySessionGroupID: studySessionGroupID,
        startTime,
        endTime,
        isRemote,
        location
    } = req.body;

    if (!studySessionTitle) return res.sendStatus(400);

    studySessions[crypto.randomUUID()] = {
        studySessionTitle,
        studySessionDescription: studySessionDescription ?? "",
        interestedUsers: [],
        startTime: startTime ?? -1,
        endTime: endTime ?? -1,
        isRemote: isRemote ?? false,
        location: location ?? ""
    }
    res.sendStatus(200);
});

router.delete('/', (req, res) => {
    const { studySessionID } = req.body;
    if (!studySessionID) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);

    delete studySessions[studySessionID];
    res.sendStatus(200);
});

router.get('/search', (req, res) => {
    const { studySessionTitle } = req.body;
    if (!studySessionTitle) return res.sendStatus(400);
    for (let studySessionID in studySessions) {
        if (String(studySessions[studySessionID].studySessionTitle) === studySessionTitle) res.send({ studySessionID: studySessionID });
    }
    res.sendStatus(404);
});

router.get('/exists', (req, res) => {
    const { studySessionID } = req.query;
    if (!studySessionID) return res.sendStatus(400);

    if (studySessions[studySessionID]) {
        return res.json({ exists: true });
    }

    res.json({ exists: false });
});

router.post('/addUser', (req, res) => {
    const { studySessionID, userID } = req.body;
    if (!userID || !studySessionID) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);

    if (!studySessions[studySessionID].interestedUsers.includes(userID)) {
        studySessions[studySessionID].interestedUsers.push(userID);
    }

    res.sendStatus(200);
});

router.post('/removeUser', (req, res) => {
    const { studySessionID, userID } = req.body;
    if (!userID || !studySessionID) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);
    const index = studySessions[studySessionID].interestedUsers.indexOf(userID);
    if (index > -1) {
        studySessions[studySessionID].interestedUsers.splice(index, 1);
    }
    res.sendStatus(200);
});

router.post('/setGroup', (req, res) => {
    const { studySessionID, studySessionGroupID } = req.body;
    if (!studySessionID || !studySessionGroupID) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);

    studySessions[studySessionID].studySessionGroupID = studySessionGroupID;
    res.sendStatus(200);
});

router.post('/setTime', (req, res) => {
    const { studySessionID, startTime, endTime } = req.body;
    if (!studySessionID || startTime === undefined || endTime === undefined) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);

    studySessions[studySessionID].startTime = startTime;
    studySessions[studySessionID].endTime = endTime;
    res.sendStatus(200);
});

router.post('/setLocation', (req, res) => {
    const { studySessionID, isRemote, location } = req.body;
    if (!studySessionID || isRemote === undefined) return res.sendStatus(400);
    if (!studySessions[studySessionID]) return res.sendStatus(404);

    studySessions[studySessionID].isRemote = isRemote;
    studySessions[studySessionID].location = location ?? "";
    res.sendStatus(200);
});

module.exports = router;