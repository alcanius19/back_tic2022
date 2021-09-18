//import Express from 'express';
const express = require("express");
const debug = require("debug")("servidor");
const morgan = require("morgan");
const chalk = require("chalk");
const path = require("path");
const cors = require("cors");

const PUERTO = process.env.PUERTO || 3000;
const servidorApp = express();
const enrutadorUsuario = require(path.join(
  __dirname,
  "./src/enrutadores/enrutadorUsuario"
));
const enrutadorRoles = require(path.join(
  __dirname,
  "./src/enrutadores/enrutadorRoles"
));
const enrutadorAdmin = require(path.join(
  __dirname,
  "./src/enrutadores/enrutadorAdmin"
));

servidorApp.use(morgan("tiny"));
servidorApp.use(express.static(path.join(__dirname, "./publico/")));
servidorApp.use(express.json());
servidorApp.use(express.urlencoded({ extended: false }));
servidorApp.use(cors({ origin: "*" }));

//servidorApp.set("views", path.join(__dirname, "./src/vistas"));
// servidorApp.set("view engine", "ejs");

servidorApp.use("/usuarios", enrutadorUsuario);
servidorApp.use("/roles", enrutadorRoles);
servidorApp.use("/admin", enrutadorAdmin);

servidorApp.get("/", (req, res) => {
  //res.send("Hola mundo");
  //res.render("index", { titulo: "Proyecto" });
  res.sendFile("index.html", {
    root: path.join(__dirname, "./publico/"),
  });
});

servidorApp.listen(PUERTO, () => {
  debug(`Escuchando en puerto ${chalk.green(PUERTO)}`);
});
