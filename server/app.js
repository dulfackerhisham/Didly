import dotenv from 'dotenv';
import express from 'express';
import { nanoid } from 'nanoid'
import { connectDb } from './src/config/mongo.config.js';
import { urlSchema } from './src/models/url.models.js';
import urlRoute from './src/routes/url.routes.js'
import { redirectUrl } from './src/controller/url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use("/api/url", urlRoute);


app.get("/:id", redirectUrl);

app.get("/api/healthy", (req, res) => {
    res.send("Healthy and live" )
})

app.use(errorHandler);

const startServer = async () => {
    connectDb();
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`);
    })
}

startServer();