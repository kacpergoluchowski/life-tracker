require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGO_URI;
const cors = require('cors');
const bp = require('body-parser')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(MONGO_URI, options)
  .then(() => {
    console.log("Pomyślnie połączono z bazą danych");

    app.listen(port, () => {
      console.log("Serwer uruchomiony na porcie ", port);
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą danych:", err);
  });

app.post('/addUser', async (req, res) => {
  console.log(req.body);
  const userSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: String
  }, {
    collection: req.body.nickname
  });

  const UserModel = mongoose.model('User', userSchema);
  
  try {
    const newUser = new UserModel({  
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    
    console.log("Dodano użytkownika", savedUser);
    
    res.status(201).json({ message: 'Użytkownik dodany pomyślnie', user: savedUser });
  } catch (error) {
    console.log("BŁAD: ", error);
    
    res.status(500).json({ error: 'Błąd podczas dodawania użytkownika' });
  }
});
