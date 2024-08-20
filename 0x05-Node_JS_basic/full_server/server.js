import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.set('databaseFile', process.argv[2] || './database.csv');

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
