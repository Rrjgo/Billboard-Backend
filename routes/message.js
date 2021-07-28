import express from 'express';
import { getMessages, sendMessage, searchMessage } from '../controllers/message';
const router = express.Router();

router.post("/search", searchMessage);

router.get("/", getMessages);

router.post("/", sendMessage);


export default router;