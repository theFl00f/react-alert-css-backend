const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();
const Schema = Mongoose.Schema;

const AlertSchema = new Schema(
  {
    user: String,
    alertName: String,
    textValues: {
      message: String,
      button: String,
    },
    css: {
      alertBorderColor: String,
      alertBackgroundColor: String,
      buttonBorderColor: String,
      buttonBackgroundColor: String,
      textColor: String,
      buttonTextColor: String,
    },
    dimensions: {
      alertWidth: Number,
      alertHeight: Number,
      alertBorderRadius: Number,
      alertBorderWidth: Number,
      alertXPadding: Number,
      alertYPadding: Number,
      buttonXPadding: Number,
      buttonYPadding: Number,
      buttonBorderRadius: Number,
      buttonBorderWidth: Number,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const AlertModel = Mongoose.model("alert", AlertSchema);

// **GET alerts listing.
router.get("/api/alerts", async (_req, res) => {
  try {
    var result = await AlertModel.find().exec();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/api/alert/:id", async function (req, res) {
  try {
    var result = await AlertModel.findById(req.params.id).exec();
    res.set("Content-Type", "application/json");
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//POST alert
router.post("/api/alert", async function (req, res) {
  try {
    var alert = new AlertModel(req.body);
    var result = await alert.save();
    res.set("Content-Type", "application/json");
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
