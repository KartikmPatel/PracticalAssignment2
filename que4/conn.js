const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Assignment2")
    .then(() => {
        console.log("Done");
    })
    .catch(() => {
        console.log("Not Done");
    })
