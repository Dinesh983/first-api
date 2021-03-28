const express = require("express");
const dotenv = require("dotenv");
const { DbConfig } = require("./config/db");
const TodoRoute = require("./app/todos/routes");

const app = express();
const { json, urlencoded } = express;

DbConfig();
app.use(json());
app.use(urlencoded({ extended:false }));
app.use("/todos", TodoRoute.public);

module.exports = {
    app
}
