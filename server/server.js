require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const UserModel = require("./models/User");
const cors = require('cors');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cors());

mongoose
  .connect(MONGO_URI, options)
  .then(() => {
    console.log("Pomyślnie połączono z bazą danych");
    
    app.listen(port, () => {
      console.log("Serwer uruchomiony na porcie ", process.env.PORT);
      const newUser = new UserModel({
        email: "dyziu@o2.pl",
        nickname: "marekgoluchowski",
        password: "renatka1",
      });

      newUser
        .save()
        .then((result) => console.log("Dodano użytkownika", result))
        .catch((err) => console.log("BŁAD: ", err));
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą danych:", err);
  });
