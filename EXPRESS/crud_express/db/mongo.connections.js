var mongoose = require("mongoose");
var mongoDB_URI = "mongodb://localhost:27017/webt03";

mongoose.connect(mongoDB_URI, {
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`MongooDB connected on ${mongoDB_URI}`);
});

db.on("disconnected", () => {
  console.log(`MongooDB disconnected`);
});

db.on("error", (error) => {
  console.log(`MongooDB error ${error}`);
});
