class MongoClient {
  static connect(_mongoose) {
    _mongoose.connect(
      "mongodb+srv://sysadmin:C7n2U01JJA6rb64J@cluster0.slu0pgj.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "Schedules",
      },
      () => console.log("connected"),
      (e) => console.log("not connected: " + e)
    );
  }
}

module.exports = MongoClient;
