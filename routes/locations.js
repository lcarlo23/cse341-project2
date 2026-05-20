import express from 'express';
import {
  getAllLocations,
  getSingleLocation,
  createLocation,
} from '../controllers/locations.js';
import {
  locationValidationRules,
  checkValidation,
} from '../middleware/validate.js';

const router = express.Router();

router.get('/', getAllLocations);
router.get('/:id', getSingleLocation);
router.post('/', locationValidationRules(), checkValidation, createLocation);

export default router;
