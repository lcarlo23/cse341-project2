import express from 'express';
import {
  getAllEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/events.js';
import {
  eventValidationRules,
  checkValidation,
} from '../middleware/validate.js';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getSingleEvent);
router.post('/', eventValidationRules(), checkValidation, createEvent);
router.put('/:id', eventValidationRules(), checkValidation, updateEvent);
router.delete('/:id', deleteEvent);

export default router;
