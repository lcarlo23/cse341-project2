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

const router = express.Router();

router.get('/', getAllLocations);
router.get('/:id', getSingleLocation);
router.post('/', locationValidationRules(), checkValidation, createLocation);
router.put('/:id', locationValidationRules(), checkValidation, updateLocation);
router.delete('/:id', deleteLocation);

export default router;
