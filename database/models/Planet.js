let mongoose = require('mongoose');

let planetSchema = new mongoose.Schema({
  name: String,
  orderFromSun: Number,
  hasRing: Boolean,
  mainAtmosphere: [String],
  surfaceTemperatureC: {
    min: Number,
    max: Number,
    mean: Number,
  }
})

module.exports = mongoose.model('Planet', planetSchema);