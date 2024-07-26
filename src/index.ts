import 'dotenv/config';

import express from 'express';
import cors from "cors"
import notFoundHandler from './middlewares/notFound';
import errorHandler from './middlewares/error';
import todoRouter from './routes/todo-route'

const app = express()

app.use(cors());
app.use(express.json())

app.use("/todo", todoRouter)

app.use(notFoundHandler)
app.use(errorHandler)

const port = process.env.PORT;

app.listen(port, () => console.log(`Sever is running on port ${port}`))