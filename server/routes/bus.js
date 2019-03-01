const express = require('express')
const router = express.Router()
const {isLogin, isAdmin} = require('../middlewares/auth')
const {addBus, findBus, findAll, deleteBus, editBus, updateInspection} = require('../controllers/bus-controller')

router.post('/', isLogin, isAdmin, addBus)
router.get('/:id', isLogin, isAdmin, findBus)
router.get('/', isLogin, findAll)
router.delete('/:id', isLogin, isAdmin, deleteBus)
router.put('/:id', isLogin, isAdmin, editBus)
router.put('/inspection/:id', isLogin, updateInspection)

module.exports = router