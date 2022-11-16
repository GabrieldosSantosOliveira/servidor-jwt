// JWT
require("dotenv/config");
const { expressjwt: expressJWT } = require("express-jwt");
const cors = require("cors");
const { routerAuth } = require("./routes/Auth");
const cookieParser = require("cookie-parser");
const { routerUser } = require("./routes/User");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: (req) => req.cookies.token,
  }).unless({
    path: ["/autenticar", "/logar", "/deslogar", "/create", "/user"],
  })
);
app.use(routerAuth);
app.use(routerUser);
app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
