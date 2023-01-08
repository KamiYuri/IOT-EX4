const Planet = require('../database/models/Planet.js');

/**
 * @swagger
 * tags:
 *   name: Planets
 *   description: The planets managing API
 *
 */

module.exports = {
    /**
     * GET Display the specified resource.
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     *
     * @swagger
     * /planets/{planetId}:
     *  get:
     *     summary: Get a planet by ID.
     *     tags: [Planets]
     *     parameters:
     *       - in: path
     *         name: planetId
     *         required: true
     *         description:
     *         schema:
     *           type: string
     *           example: 621ff30d2a3e781873fcb661
     *     responses:
     *       200:
     *         description: Planet by ID.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Planet'
     *
     */
    show: async function (req, res) {
        const id = req.params['planetId'];

        try {
            const result = await Planet.findById(id).exec();
            res.respond(result, 200);
        } catch (error) {
            res.fail(error, 404);
        }
    },

    /**
     * GET Display a listing of the resource.
     * @param req
     * @param res
     * @returns {Promise<void>}
     *
     * @swagger
     * /planets:
     *  get:
     *     summary: Get planets, can be paginated.
     *     tags: [Planets]
     *     parameters:
     *       - in: query
     *         name: page
     *         required: false
     *         description:
     *         schema:
     *           type: integer
     *           example: 1
     *       - in: query
     *         name: perPage
     *         required: false
     *         description:
     *         schema:
     *           type: integer
     *           example: 5
     *     responses:
     *       200:
     *         description: A list of planets.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Planet'
     *
     */

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

    /**
     * POST Store a newly created resource in storage.
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     *
     * @swagger
     * /planets:
     *  post:
     *     summary: Create new planet.
     *     tags: [Planets]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Planet'
     *     responses:
     *       200:
     *         description: New planet.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Planet'
     *
     */
    store: async function (req, res) {
        try {
            const result = await Planet.create(req.body);

            res.respond(result);
        } catch (error) {
            res.fail(error);
        }
    },

    /**
     * PUT Update the specified resource in storage.
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     *
     * @swagger
     * /planets/{planetId}:
     *  put:
     *     summary: Update a planet by ID.
     *     tags: [Planets]
     *     parameters:
     *       - in: path
     *         name: planetId
     *         required: true
     *         description:
     *         schema:
     *           type: string
     *           example: 621ff30d2a3e781873fcb661
     *     requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Planet'
     *     responses:
     *       200:
     *         description: Old planet.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Planet'
     *
     */
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

    /**
     * DELETE Remove the specified resource from storage.
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     *
     * @swagger
     * /planets/{planetId}:
     *  delete:
     *     summary: Delete a planet by ID.
     *     tags: [Planets]
     *     parameters:
     *       - in: path
     *         name: planetId
     *         required: true
     *         description:
     *         schema:
     *           type: string
     *           example: 621ff30d2a3e781873fcb661
     *     responses:
     *       200:
     *         description: Deleted planet.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Planet'
     *
     */
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