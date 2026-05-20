import express from 'express';
import eventRoutes from './events.js';

const router = express.Router();

router.use('/events', eventRoutes);

router.get('/', (req, res) => {
  res.send('Event Planner API');
});

export default router;
