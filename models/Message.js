const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  user: String,
  text: String,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
