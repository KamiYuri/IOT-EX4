const express = require('express');
const router = express.Router();
const planetController = require('../controllers/PlanetController.js');
const expressListRoutes = require('express-list-routes');

router.post('/', planetController.store);
router.get(':page?:perPage?', planetController.index);
router.get('/:planetId', planetController.show);
router.put('/:planetId', planetController.update);
router.delete('/:planetId', planetController.destroy);

expressListRoutes(router);

module.exports = router;
