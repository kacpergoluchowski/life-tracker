// ------------------------------------- IMPORT BIBLIOTEK -------------------------------------
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bp = require("body-parser");
const cors = require("cors");
const app = express();

// ------------------------------------- ŁĄCZENIE Z ENV -------------------------------------

const port = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// ------------------------------------- MIDDLEWARE -------------------------------------

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------------------- TWORZENIE POŁĄCZNIA Z BAZĄ -------------------------------------

mongoose
  .connect(MONGO_URI, options)
  .then(() => {
    console.log("Pomyślnie połączono z bazą danych");

    app.listen(port, () => {
      console.log("Serwer uruchomiony na porcie ", port);
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą danych:", err);
  });

// ------------------------------------- ENDPOINT - REJESTROWANIE UŻYTKOWNIKA -------------------------------------

app.post("/addUser", async (req, res) => {
  const collectionName = req.body.nickname;

  let UserModel;
  try {
    UserModel = mongoose.model(collectionName);
  } catch (error) {
    const userSchema = new mongoose.Schema(
      {
        email: String,
        nickname: String,
        password: String,
      },
      {
        collection: collectionName,
      }
    );

    UserModel = mongoose.model(collectionName, userSchema);
  }

  try {
    const newUser = new UserModel({
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    console.log("Dodano użytkownika", savedUser);

    res.status(201).json({
      success: true,
      message: "Użytkownik dodany pomyślnie",
      user: savedUser,
    });
    sendMail(req.body.email);
  } catch (error) {
    console.error("BŁAD: ", error);

    res.status(500).json({
      success: false,
      error: "Błąd podczas dodawania użytkownika",
      details: error.message,
    });
  }
});

// ------------------------------------- ENDPOINT - LOGOWANIE UŻYTKOWNIKA -------------------------------------

app.post("/loginUser", async (req, res) => {
  const db = mongoose.connection.db;

  try {
    const collections = await db.listCollections().toArray();
    let foundCollection = null;

    collections.forEach((userCollection) => {
      if (userCollection.name === req.body.nickname) {
        console.log("UŻYTKOWNIK ISTNIEJE 1/2");
        foundCollection = userCollection;
      }
    });

    if (foundCollection) {
      const collectionName = foundCollection.name;

      let User;

      try {
        User = mongoose.model(collectionName);
      } catch (error) {
        const userSchema = new mongoose.Schema(
          {
            email: String,
            nickname: String,
            password: String,
          },
          {
            collection: collectionName,
          }
        );

        User = mongoose.model(collectionName, userSchema);
      }

      const docs = await User.find({});

      docs.forEach((user) => {
        if (req.body.password === user.password)
          res.status(201).json({
            success: true,
            message: "Done!",
            user: user.name,
          });
        else
          res.status(201).json({
            success: false,
            message: "Password isn't correct!",
            user: user.name,
          });
      });
    } else {
      res.status(201).json({
        success: false,
        message: "User doesn't exist!",
        user: null,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post("/addActivities", async (req, res) => {
  const db = mongoose.connection.db;
  let activityModel;
  if(mongoose.modelNames().includes('ActivityModel')) {
    activityModel = mongoose.model('ActivityModel');
  } else {
    var activitySchema = mongoose.Schema({
      id: Number,
      type: String,
    });
  }

  activityModel = mongoose.model('ActivityModel', activitySchema, req.body.nickname)

  const newActivity = [
    {
      id: req.body.id,
      type: req.body.type,
    },
  ];

  try {
    activityModel.create(newActivity);
    res.status(201).json({
      success: true,
      message: 'activity added!'
    })
  } catch(err) {
    console.log(err)
    res.status(201).json({
      success: false,
      message: 'error: ', err
    })
  }
});









// ------------------------------------- FUNKCJE -------------------------------------

function sendMail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lifetracker0@gmail.com",
      pass: "iefh ykaq ezco kegs",
    },
  });

  const mailOptions = {
    from: "lifetracker0@gmail.com",
    to: email,
    subject: "LifeTracker login confirmation",
    text: "Thank you for signing up for our LifeTracker app. You can now log in to your account.",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("email sent!");
  });
}
