import express from 'express';

const app = express();
const PORT = 5000

app.get("/", (req, res) => {
    res.send("Hello Hisham")
})

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})