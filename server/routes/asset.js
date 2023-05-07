const express = require('express')
const router = express.Router()
const asset = require('../controllers/assetController')

router.get('/', asset.getAsset)

router.post('/upload', asset.upload.single('image'), asset.addAsset)

router.delete('/:assetId', asset.deleteAsset)


module.exports = router