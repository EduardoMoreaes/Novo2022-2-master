var express = require("express");
var app = express();

const usuarioRoute = require("./routes/usuarioRoute");
const professorRoute = require("./routes/professorRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/", usuarioRoute);
app.use("/", professorRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
