const mongoose = require("mongoose");
const options = {
  poolSize: 10
};
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://dbUser:Root111000@learningcluster.tcjx5.mongodb.net/",
  options
);
module.exports = mongoose;
