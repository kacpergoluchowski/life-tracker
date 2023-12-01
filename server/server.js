require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 9000; // Używaj zmiennej 'port' zamiast 'process.env.PORT'
const MONGO_URI = process.env.MONGO_URI;
const UserModel = require("./models/User");
const cors = require('cors');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cors());
app.use(express.json()); // Dodaj middleware do obsługi danych JSON w żądaniach

// Połącz z bazą danych na starcie serwera
mongoose.connect(MONGO_URI, options)
  .then(() => {
    console.log("Pomyślnie połączono z bazą danych");

    // Uruchom serwer po połączeniu z bazą danych
    app.listen(port, () => {
      console.log("Serwer uruchomiony na porcie ", port);
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą danych:", err);
  });

// Obsługa żądania POST /addUser
app.post('/addUser', async (req, res) => {
  try {
    const newUser = new UserModel({
      email: "dyziu@o2.pl",
      nickname: "marekgoluchowski",
      password: "renatka1",
    });

    const savedUser = await newUser.save();
    console.log("Dodano użytkownika", savedUser);
    res.status(201).json({ message: 'Użytkownik dodany pomyślnie', user: savedUser });
  } catch (error) {
    console.log("BŁAD: ", error);
    res.status(500).json({ error: 'Błąd podczas dodawania użytkownika' });
  }
});
