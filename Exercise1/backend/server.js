import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Videos from './dbModel.js';

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://thuyduong:Superjunior13@atlascluster.q9cmqbl.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))
app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find().exec();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))