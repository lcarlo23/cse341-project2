import express from 'express';
import {
  getAllEvents,
  getSingleEvent,
  createEvent,
} from '../controllers/events.js';
import {
  eventValidationRules,
  checkValidation,
} from '../middleware/validate.js';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getSingleEvent);
router.post('/', eventValidationRules(), checkValidation, createEvent);

export default router;
