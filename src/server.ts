import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
    res.send({ message: 'Hello' });
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
