const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
   id: Schema.Types.ObjectId,
   prompt: String,
   options: [String]
});