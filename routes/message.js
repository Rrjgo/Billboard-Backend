const express = require('express');
const { getMessages,sendMessage, searchMessage } = require('../controllers/message');
const router  = express.Router();

router.post("/search", searchMessage);

router.get("/", getMessages);

router.post("/", sendMessage);



module.exports = router;