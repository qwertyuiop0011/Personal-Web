const express = require('express');
const subdomain = require('express-subdomain');
const path = require('path');
const fileupload = require('express-fileupload');

let bpath = path.join(__dirname, "src");

const app = express();
app.use(express.static(bpath));
app.use(fileupload());

const router = express.Router();
app.use(subdomain('blog', router));

app.get('/', (req, res) => {
    res.sendFile(path.join(bpath, 'home.html'));
})

router.get('/', (req, res) => {
    res.sendFile(path.join(bpath, 'blog.html'));
})

app.listen("3000", () => {
    console.log("Listening...")
})