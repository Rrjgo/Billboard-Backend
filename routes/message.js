const express = require('express');
const { getMessages,sendMessage } = require('../controllers/message');
const router  = express.Router();

router.get("/", getMessages);

router.post("/", sendMessage);

module.exports = router;