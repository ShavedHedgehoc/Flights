const Router = require('express')
const pointController = require('../controllers/pointController')
const router = new Router()

// add validation to create
router.get('', pointController.getPoints)
router.get('/:id', pointController.getPointById)
router.post('', pointController.createPoint)
router.delete('', pointController.deleteAllPoints)
router.delete('/:id', pointController.deletePointById)
router.put('/:id', pointController.updatePointById)

module.exports = router
