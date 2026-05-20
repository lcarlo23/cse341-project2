import express from 'express';
import eventRoutes from './events.js';
import locationRoutes from './locations.js';

const router = express.Router();

router.use('/events', eventRoutes);
router.use('/locations', locationRoutes);

router.get('/', (req, res) => {
  res.send('Event Planner API');
});

export default router;
