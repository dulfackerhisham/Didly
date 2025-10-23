import dotenv from 'dotenv';
import express from 'express';
import { nanoid } from 'nanoid'
import { connectDb } from './src/config/mongo.config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.post("/api/create", (req, res) => {
    const {url} = req.body
    console.log(`url -> ${url}`);
    res.send(nanoid(15))
})

app.get("/", (req, res) => {
    const url = req.body
    console.log(url);
    res.send(nanoid(5))
})

const startServer = async () => {
    connectDb();
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`);
    })
}

startServer();