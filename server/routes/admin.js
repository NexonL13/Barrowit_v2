const express = require('express')
const router = express.Router()
const admin = require('../controllers/adminController')

router.get('/admin', admin.getAdmins)
router.get('/admin/:id', admin.getOneAdmin)
router.get('/login', admin.isLoggedIn)
router.get('/logout', admin.logoutAdmin)
router.post('/register', admin.registerAdmin)
router.post('/login', admin.loginAdmin)
router.put('/admin/:id', admin.updateAdmin)
router.delete('/admin/:id', admin.deleteAdmin)

module.exports = router