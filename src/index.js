const dotenv = require("dotenv");
const logger = require("morgan");
const routes = require("./routes");
const express = require("express");

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);
app.use(logger("combined"));
app.listen(3000, () => console.log("server started🔥 http://localhost:3000"));
