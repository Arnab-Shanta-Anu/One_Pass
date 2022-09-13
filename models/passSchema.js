const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passSchema = new Schema({
  website: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const Password = mongoose.model("Password", passSchema);
module.exports = Password;
