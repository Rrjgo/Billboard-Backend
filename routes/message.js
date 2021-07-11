const express = require('express');
const { getMessages,sendMessage, searchMessage } = require('../controllers/message');
const router  = express.Router();

router.get("/", getMessages);

router.post("/", sendMessage);

router.search("/", searchMessage);

module.exports = router;