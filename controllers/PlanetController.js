const Planet = require('../database/models/Planet.js');

module.exports = {
    // GET Display a listing of the resource.
    index: async function (req, res) {
        const page = req.query['page'];
        const perPage = req.query['perPage'];

        try {
            const result = await Planet.find({})
                .limit(perPage || 10)
                .skip((page || 0) * perPage)
                .exec();

            res.respond(result, 200);
        } catch (error) {
            res.fail(error, 404);
        }
    },

    //POST Store a newly created resource in storage.
    store: async function (req, res) {
        try {
            const result = await Planet.create(req.body);

            res.respond(result);
        } catch (error) {
            res.fail(error);
        }
    },

    // GET Display the specified resource.
    show: async function (req, res) {
        const id = req.params['planetId'];

        try {
            const result = await Planet.findById(id).exec();
            res.respond(result, 200);
        } catch (error) {
            res.fail(error, 404);
        }
    },

    // PUT Update the specified resource in storage.
    update: async function (req, res) {
        const id = req.params['planetId'];

        try {
            const result = await Planet.findByIdAndUpdate(id, req.body);
            // Result is old planet
            res.respond(result, 200);
        } catch (error) {
            res.fail(error);
        }
    },

    // DELETE Remove the specified resource from storage.
    destroy: async function (req, res) {
        const id = req.params['planetId'];

        try {
            const result = await Planet.findByIdAndDelete(id);
            // Result is deleted planet
            res.respond(result, 200);
        } catch (error) {
            res.fail(error);
        }
    }
}