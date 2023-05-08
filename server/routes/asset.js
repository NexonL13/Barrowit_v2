const express = require('express')
const router = express.Router()
const asset = require('../controllers/assetController')

router.get('/', asset.getAssets)

router.get('/:assetId', asset.getSingleAsset)

router.post('/upload', asset.upload.single('image'), asset.addAsset)

router.put('/:assetId', asset.upload.single('image'), asset.updateAsset)

router.delete('/:assetId', asset.deleteAsset)


module.exports = router