const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

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
// middlewares
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));

// routers
const authRoute = require('./routes/auth');

app.get('/', (req, res) => {
    fs.readFile("./public/home.html", 'UTF-8', function (err, html) {
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.end(html);
    });
});

app.use('/api', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});