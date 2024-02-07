import express from 'express';
import { test1, test2 } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test1', test1);

router.get('/test2', test2);

export default router;