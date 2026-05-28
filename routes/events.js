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
import { isAuthenticated } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getSingleEvent);
router.post(
  '/',
  isAuthenticated,
  eventValidationRules(),
  checkValidation,
  createEvent,
);
router.put(
  '/:id',
  isAuthenticated,
  eventValidationRules(),
  checkValidation,
  updateEvent,
);
router.delete('/:id', isAuthenticated, deleteEvent);

export default router;
