import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

import db from "./config/database";
import hb from "./config/handlebars"
import users from "./routes/users"

const app = express();

app.use(cors());
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json({ 'type': '*/*',limit: '20mb' }));  // To fix too large data error


app.use("/users", users);

//Home route
app.get('/', (req, res) => {
    res.status(200).json({
        message:"Server running..."
    });  
});

module.exports = app;