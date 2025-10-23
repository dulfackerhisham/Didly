import dotenv from 'dotenv';
import express from 'express';
import { nanoid } from 'nanoid'
import { connectDb } from './src/config/mongo.config.js';
import { urlSchema } from './src/models/url.models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.post("/api/create", async (req, res) => {
    const {url} = req.body
    const newShortUrl = nanoid(7)
    const newUrl = new urlSchema({
        longUrl:url,
        shortUrl:newShortUrl,
    })

    await newUrl.save();
    res.send({success: true, message: `Url shortened ${newUrl.shortUrl}`})
})

app.get("/:id", async (req, res) => {
    const {id} = req.params;
    const findUrl = await urlSchema.findOne({ shortUrl:id })
    console.log(findUrl);
    res.redirect(findUrl.longUrl)
    

})

app.get("/api/healthy", (req, res) => {
    res.send("Healthy and live!" )
})

const startServer = async () => {
    connectDb();
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`);
    })
}

startServer();