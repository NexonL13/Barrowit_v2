const express = require('express')
const router = express.Router()
const asset = require('../controllers/assetController')
const middleware = require('../middleware/middleware')

router.get('/', asset.getAssets)

router.get('/:assetId', asset.getSingleAsset)

router.post('/upload', [middleware.validateAuthSession, middleware.upload], asset.addAsset)

router.put('/:assetId', [middleware.validateAuthSession, middleware.upload], asset.updateAsset)

router.delete('/:assetId', asset.deleteAsset)


module.exports = router