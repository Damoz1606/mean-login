import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose, { mongo } from 'mongoose'

import { mongoURL } from './config/database';
import router from "./app/routes/user.routes";

const app = express();

//database
mongoose.connect(mongoURL(), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("Mongo Ready"))
.catch(error => console.log(error));

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes
app.use("/api", router);

//static

export default app;