const Router = require('express')
const plantController = require('../controllers/plantController')
const router = new Router()

// add validation to create
router.get('', plantController.getPlants)
router.get('/:id', plantController.getPlantById)
router.post('', plantController.createPlant)
router.delete('', plantController.deleteAllPlants)
router.delete('/:id', plantController.deletePlantById)
router.put('/:id', plantController.updatePlantById)

module.exports = router
