const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const sessionRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/connection");

//GET all sessions
sessionRoutes.route("/session").get(function (req, res) {
    let db_connect = dbo.getDb("bonezone");
    db_connect
      .collection("sessions")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

//ADD new session
sessionRoutes.route("/session/add").post(function (req, res) {
    let db_connect = dbo.getDb("bonezone");
    let myobj = {
      f_id: req.body.f_id,
      content: [],
      q_ids: [],
    };
    db_connect.collection("sessions").insertOne(myobj, function (err, res) {
      if (err) throw err;
    });
  });



module.exports = sessionRoutes;