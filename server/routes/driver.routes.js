const Router = require('express')
const driverController = require('../controllers/driverController')
const router = new Router()

// add validation to create
router.get('', driverController.getDrivers)
router.get('/:id', driverController.getDriverById)
router.post('', driverController.createDriver)
router.delete('', driverController.deleteAllDrivers)
router.delete('/:id', driverController.deleteDriverById)
router.put('/:id', driverController.updateDriverById)

module.exports = router
