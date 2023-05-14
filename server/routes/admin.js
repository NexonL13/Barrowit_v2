const express = require('express')
const router = express.Router()
const admin = require('../controllers/adminController')

router.get('/login', admin.isLoggedIn)
router.get('/logout', admin.logoutAdmin)
router.post('/register', admin.registerAdmin)
router.post('/login', admin.loginAdmin)

module.exports = router