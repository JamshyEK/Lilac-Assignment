const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: { type: String , required: true},
  name: { type: String , required: true},
  price: { type: Number,required: true},
  category: { type: String , required: true},
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("product", productSchema);
