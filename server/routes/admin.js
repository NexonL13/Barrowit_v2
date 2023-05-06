const express = require('express')
const router = express.Router()
const admin = require('../controllers/adminController')

router.post('/register', admin.registerAdmin)
router.post('/login', admin.loginAdmin)

module.exports = router