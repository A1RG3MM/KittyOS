const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'))

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use(limiter);

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(PORT, () => {
    console.log(`KittyOS is running on http://localhost:${PORT}`);
});
