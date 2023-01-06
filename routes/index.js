const planetsRouter = require('./planets.js');

module.exports = function (app) {
    app.use('/planets', planetsRouter);
};