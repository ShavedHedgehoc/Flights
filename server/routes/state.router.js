const Router = require('express')
const stateController = require('../controllers/stateController')
const router = new Router()
//remove model
// add validation to create
router.get('', stateController.getStates)
router.get('/:id', stateController.getStateById)
router.post('', stateController.createState)
router.delete('', stateController.deleteAllStates)
router.delete('/:id', stateController.deleteStateById)
router.put('/:id', stateController.updateStateById)

module.exports = router
