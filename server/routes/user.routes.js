const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.get('', userController.getAllUsers)
router.delete('', userController.deleteAllUsers)

module.exports = router
