const mongoose = require("mongoose");
const MongoClient = require("./MongoClient");

MongoClient.connect(mongoose);

const userSchema = new mongoose.Schema({
  username: String,
  employeeID: Number,
  schedules: {
    type: [
      [Boolean, Boolean],
      [Boolean, Boolean],
      [Boolean, Boolean],
    ],
    default: [false, false],
  },
}).set("collection", "userData");

module.exports = mongoose.model("User", userSchema);
