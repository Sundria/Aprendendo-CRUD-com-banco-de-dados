import express from 'express';
import routes from './src/api/routes/routes.js';

const app = express();
const port = 3000;

//middleware -  uma função que trata as informações antes de chegar ao endpoint

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
    console.log(`server em: localhost:${port}`)
})