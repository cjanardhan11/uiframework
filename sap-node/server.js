const express = require("express");
const mongoose = require("mongoose");
const url = require("./models/db.js").url;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", require("./routes/route.js"));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(() => {
    console.log("Database Connected");
    })
    .catch((error) => {
        console.log("Error ", error.message);
    });

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});