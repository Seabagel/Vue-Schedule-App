const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sysadmin:C7n2U01JJA6rb64J@cluster0.slu0pgj.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "Schedules",
  },
  () => console.log("connected"),
  (e) => console.log("not connected: " + e)
);

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

const User = mongoose.model("User", userSchema);

async function run() {
  const user = await User.create({
    username: "Try User",
    employeeID: 23783,
    schedules: [
      [true, false],
      [true, false],
      [false, false],
    ],
  }).then((e) => console.log("User added"));
}

run();
