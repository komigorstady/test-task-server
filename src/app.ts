import express, { Application } from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import router from './routes/index';
import errorrHandler from './middlewares/ErrorHandlingMiddleware';

dotenv.config();

// import database
import db from './db';

const PORT = process.env.PORT || 5000;

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'static')));

app.use('/api', router);

app.use(errorrHandler);

async function start() {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

start();
