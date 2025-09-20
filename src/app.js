import express from 'express';
import router from './route/index.route.js';
import config from './config/index.js';

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
