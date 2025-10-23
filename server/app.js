import express from 'express';
import { nanoid } from 'nanoid'

const app = express();
const PORT = 5000

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

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})