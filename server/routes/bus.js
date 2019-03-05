const express = require('express')
const router = express.Router()
const {isLogin, isAdmin} = require('../middlewares/auth')
const {addBus, findBus, findAll, deleteBus, findStatus, editBus, updateInspection, worthy, notWorthy} = require('../controllers/bus-controller')

router.post('/', isLogin, isAdmin, addBus)
router.get('/findtrue', isLogin, isAdmin, findStatus)
router.get('/:id', isLogin, isAdmin, findBus)
router.get('/', isLogin, findAll)
router.delete('/:id', isLogin, isAdmin, deleteBus)
router.put('/:id', isLogin, isAdmin, editBus)
router.put('/inspection/:id', isLogin, updateInspection)
router.patch('/worthy/:id', isLogin, worthy)
router.patch('/notworthy/:id', isLogin, notWorthy)

module.exports = router