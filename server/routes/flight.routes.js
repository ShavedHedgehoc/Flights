const Router = require('express')
const flightController = require('../controllers/flightController')
const router = new Router()

// add validation to create
router.get('', flightController.getFlights)
router.get('/bydriver/:id', flightController.getFlightByDriverId)

// router.get("/:id", driverController.getDriverById);
router.post('', flightController.createFlight)
router.delete('', flightController.deleteAllFlights)
router.get('/last', flightController.getLastFlights)
// router.delete("/:id", driverController.deleteDriverById);
router.put('/close', flightController.closeFlightsByDriverId)
router.put('/:id', flightController.updateFlightById)

module.exports = router
