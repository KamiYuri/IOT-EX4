/**
 * @swagger
 * components:
 *   schemas:
 *     Planet:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The planet ID.
 *           example: 63b87bc309c28e62945127df
 *         surfaceTemperatureC:
 *           type: object
 *           properties:
 *             min:
 *               type: number
 *               description: The planet's min temperature.
 *             max:
 *               type: number
 *               description: The planet's max temperature.
 *             mean:
 *               type: number
 *               description: The planet's mean temperature.
 *           description:
 *           example: { min: -89.2, max: 56.7, mean: 14 }
 *         name:
 *           type: string
 *           description: The planet's name.
 *           example: Earth
 *         orderFromSun:
 *           type: number
 *           description: Order from the Sun.
 *           example: 3
 *         hasRings:
 *           type: boolean
 *           description: Does this planet have rings?
 *           example: false
 *         mainAtmosphere:
 *           type: array
 *           items:
 *             type: string
 *           description:
 *           example: ["N","O2","Ar"]
 */

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