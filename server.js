const express = require("express");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// const db = require('./db/db');

// console.log(db.read());

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

const port = 3000;

// require db.json file and add the contents to a variable.

app.listen(port, () => {
    console.log(`'listening at http://localhost:' + ${port})`)
});

// /api/notes -> JSON data
// /notes -> notes.html
// / -> index.html

