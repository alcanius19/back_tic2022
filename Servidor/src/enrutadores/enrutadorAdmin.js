const { greenBright } = require("chalk");
const express = require("express");
const debug = require("debug")("servidor:adminRouter");
const { MongoClient } = require("mongodb");
//const sessions = require("../data/sessions.json");

const enrutadorAdmin = express.Router();

enrutadorAdmin.route("/").get((req, res) => {
  const url =
    "mongodb+srv://dbUser:yMJkd7BwwHHGM0CZ@cluster0.e4tzb.mongodb.net?retryWrites=true&w=majority";
  const dbName = "proyecto_";

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url, { useUnifiedTopology: true });
      debug("Conectado a la BD Mongo");

      const db = client.db(dbName);

      const roles = await db.collection("admin").find().toArray();
      res.json(roles);
    } catch (error) {
      debug(error.stack);
    }
    client.close();
  })();
});

module.exports = enrutadorAdmin;
