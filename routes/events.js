import express from 'express';
import {
  getAllEvents,
  getSingleEvent,
  createEvent,
} from '../controllers/events.js';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getSingleEvent);
router.post('/', createEvent);

export default router;
