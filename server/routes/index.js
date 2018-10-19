import express from 'express';
import album from './album';

const router = express.Router();
router.use('/album', album);




export default router;