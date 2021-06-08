import express from "express";
import Mongoose, { Document, Schema as ISchema } from "mongoose";
const router = express.Router();
const Schema = Mongoose.Schema;

interface AlertDimensions {
  alertWidth: number;
  alertHeight: number;
  alertBorderRadius: number;
  alertBorderWidth: number;
  alertXPadding: number;
  alertYPadding: number;
  buttonXPadding: number;
  buttonYPadding: number;
  buttonBorderRadius: number;
  buttonBorderWidth: number;
}

interface AlertColors {
  alertBorderColor: string;
  alertBackgroundColor: string;
  buttonBorderColor: string;
  buttonBackgroundColor: string;
  textColor: string;
  buttonTextColor: string;
}

interface AlertTextValues {
  message: string;
  button: string;
}

interface DBAlert extends Document {
  user: string;
  alertName: string;
  textValues: AlertTextValues;
  css: AlertColors;
  dimensions: AlertDimensions;
}

interface DBAlertWithId extends DBAlert {
  _id: string;
}

const AlertSchema: ISchema = new Schema(
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

const AlertModel = Mongoose.model<DBAlertWithId>("alert", AlertSchema);

// **GET alerts listing.
router.get("/api/alerts", async (_req, res) => {
  try {
    const result = await AlertModel.find().sort({ created_at: -1 }).exec();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/api/alert/:id", async (req, res) => {
  try {
    const result = await AlertModel.findById(req.params.id).exec();
    res.set("Content-Type", "application/json");
    if (!result) {
      return res.status(404).send("Alert not found");
    }
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//POST alert
router.post("/api/alert", async (req, res) => {
  try {
    const alert = new AlertModel(req.body);
    const result = await alert.save();
    res.set("Content-Type", "application/json");
    res.end(JSON.stringify({ result }, null, 2));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
