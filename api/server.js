const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const recipeRouter = require();
const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());
