require("dotenv").config();

const MongoDB_URL = process.env.MongoDB_URL;
const Port = process.env.Port

module.exports = {MongoDB_URL,Port}