const User = require("./User");

class MongoREST {
  static async addUser() {
    // this.connectClient()
    const user = await User.create({
      username: "MongoClient User",
      employeeID: 23783,
      schedules: [
        [true, false],
        [true, false],
        [false, false],
      ],
    }).then((e) => console.log("User " + e));
  }
}

module.exports = MongoREST;
