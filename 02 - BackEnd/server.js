const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const URL =
  "mongodb+srv://mateuslwd:Mk231518.@cluster0.kxfvnmw.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  const client = new MongoClient(URL);
  await client.connect();
  return client.db("Cluster0");
}

async function inserirDados(data) {
  try {
    const db = await connect();
    const collection = db.collection("comments");

    const result = await collection.insertOne(data);
  } catch (error) {
    console.error(error);
  }
}

var data = {
  author: "Fernando",
  status: "ongoing",
  date: "21/04/2023",
  body: "Alguem consegue me ajudar nesse pedaço do shader que eu estou escrevendo",
  answers: [],
};
/*
inserirDados(data)
  .then(() => {
    console.log("Dado inserido com sucesso.");
  })
  .catch((error) => {
    console.error(error);
  });
  */

async function lerDado() {
  const db = await connect();

  const collection = db.collection("comments");

  const cursor = collection.find({});

  const result = await cursor.toArray();

  return result;
}

app.listen(3000, console.log(`Servidor rodando na porta ${3000}`));

app.get("/comment/:user?/:id?", (req, res) => {
  const user = req.params.user;
  const id = req.params.id;
  let filter = {};

  if (user != undefined) {
    let upr = user.charAt(0).toUpperCase() + user.slice(1);
    filter = { author: upr };
  }

  findByFilter(filter)
    .then((data) => {
      res.send(data[id]);
    })
    .catch((error) => {
      console.error(error);
    });
});

/*
lerDado()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
*/

async function findByFilter(filter) {
  const db = await connect();

  const collection = db.collection("comments");

  const cursor = collection.find(filter);

  const result = cursor.toArray();

  return result;
}
