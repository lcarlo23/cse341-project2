import express from 'express';
import eventRoutes from './events.js';
import locationRoutes from './locations.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' with { type: 'json' };

const router = express.Router();

router.use('/events', eventRoutes);
router.use('/locations', locationRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.send('Event Planner API');
});

export default router;
