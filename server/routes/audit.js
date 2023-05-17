const express = require('express')
const router = express.Router()
const audit = require('../controllers/auditController')

router.get('/', audit.getAudits)


module.exports = router