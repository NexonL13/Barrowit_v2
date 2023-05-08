const { Asset } = require('../models')
const multer = require('multer')
const path = require('path')

const getAssets = async (req,res) => {
    const listOfAsset = await Asset.findAll()
    res.json(listOfAsset)
}

const getSingleAsset = async (req,res) => {
    const assetId = req.params.assetId
    const asset = await Asset.findOne({where: {id: assetId}})
    res.json(asset)
}

const addAsset = async (req,res) => {
    const asset = {
        image: req.file.filename,
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category,
        sponsor: req.body.sponsor
    }

    const existAsset = await Asset.findOne({where: {name: asset.name}})
    if(existAsset) {
        res.json({error: 'Asset already exist'})
    }else {
        await Asset.create(asset)
        res.json(asset)
    }
      
}

const updateAsset = async (req,res) => {
    const assetId = req.params.assetId
    if(req.file){
    const asset = {
            image: req.file.filename,
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            category: req.body.category,
            sponsor: req.body.sponsor
        }
    
        await Asset.update(asset, {
            where: {
                id: assetId,
            }
        })
        res.json(asset)
    }else {
        res.json({error: 'No file uploaded'})
    }
    
}

const deleteAsset = (req,res) => {
    const assetId = req.params.assetId

    Asset.destroy({
        where: {
            id: assetId,
        }
    })
    res.json("Deleted")
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})

module.exports = {
    getAssets,
    getSingleAsset,
    addAsset,
    updateAsset,
    deleteAsset,
    upload
}