const express = require('express');
const { getMessage,sendMessage } = require('../controllers/message');
const router  = express.Router();

router.get("/", getMessage);

router.post("/", sendMessage);

module.exports = router;