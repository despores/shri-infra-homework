import express from 'express';
import { router } from './routes';

const port = Number(process.env.PORT) || 3000;
const basename = '/hw/store';

const app = express();

const test = 2;
console.log(test);

app.use(express.json());
app.use(basename, express.static('dist', { index: false }));
app.use(basename, router);

app.listen(port, '::', () => {
    console.log(`Example app listening at http://localhost:${port}${basename}`);
});
