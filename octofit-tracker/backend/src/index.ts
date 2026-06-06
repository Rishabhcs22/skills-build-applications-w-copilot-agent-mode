import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 8000;
const mongoUri = 'mongodb://localhost:27017/octofit-tracker';

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'OctoFit Tracker backend running' });
});

mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB at', mongoUri);
        app.listen(port, () => {
            console.log(`Backend listening on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    });
