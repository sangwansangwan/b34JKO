const mongoose = require("mongoose");
const options = {
  poolSize: 10,
  useNewUrlParser: true ,
  useUnifiedTopology:true
};
mongoose.Promise = global.Promise;
//"mongodb://localhost:27017/HomeAway",
// "mongodb://sojanmathew:sojanm28@ds133920.mlab.com:33920/homeaway",
mongoose.connect(
  "mongodb+srv://dbUser:Root111000@learningcluster.tcjx5.mongodb.net/",
  options
);


module.exports = mongoose;
