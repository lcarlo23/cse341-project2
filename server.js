import express from 'express';
import { initDb } from './db/connect.js';
import routes from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/', routes);

async function start() {
  try {
    await initDb();
    app.listen(port, () => {
      console.log(`Server connected to DB and listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database', err);
  }
}

start();
