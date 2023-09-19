const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const personRoutes = require("./routes/postRoute.js");
app.use("/post", personRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    app.listen(3000, console.log(`Servidor rodando na porta ${3000}`))
  )
  .catch((error) => {
    console.error(error);
  });
