import express from 'express';
import {
  getAllLocations,
  getSingleLocation,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/locations.js';
import {
  locationValidationRules,
  checkValidation,
} from '../middleware/validate.js';
import { isAuthenticated } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', getAllLocations);
router.get('/:id', getSingleLocation);
router.post(
  '/',
  isAuthenticated,
  locationValidationRules(),
  checkValidation,
  createLocation,
);
router.put(
  '/:id',
  isAuthenticated,
  locationValidationRules(),
  checkValidation,
  updateLocation,
);
router.delete('/:id', isAuthenticated, deleteLocation);

export default router;
