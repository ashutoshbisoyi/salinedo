const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3500
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Database Connected...");
    });

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Salindo Backend!");
    res.status(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});