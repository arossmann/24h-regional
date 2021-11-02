const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    street: String,
    zip: String,
    city: String,
    country: String
})
const StoreSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    open: String,
    url: String,
    source: String,
    location: locationSchema,
    products: [String],

  },
  { autoIndex: false }
);

const Store = mongoose.model('Store', StoreSchema);
module.exports = Store;