const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");
var cors = require("cors");

app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, err => {
  if (err) console.log("server error");
  else console.log("server is listening in port 5000");
});

const mongo_url = "mongodb://localhost:27017";
const dataBase = "datahotel";
MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(err, null, "data base connexion failed");
  const db = client.db(dataBase);

  app.post("/reservation", (req, res) => {
    let newperson = req.body;
    db.collection("detailreservation").insertOne(newperson, (err, data) => {
      if (err)  res.send("cannot add a person");
      else res.send(data);
    });
  });
  

  app.get("/detailshotel", (req, res) => {
    db.collection("globalDetail")
      .find({})
      .toArray((err, data) => {
        if (err) res.send("cannot display detail shotel");
        else res.send(data);
      });
  });
  app.get("/les-reservations", (req, res) => {
    db.collection("detailreservation")
      .find({})
      .toArray((err, data) => {
        if (err) res.send("cannot display reservation");
        else res.send(data);
      });
  });

 
});
