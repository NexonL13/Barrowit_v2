const { Asset, Audit, Admin } = require('../models')

const getAssets = async (req,res) => {
    const listOfAsset = await Asset.findAll({ order: [['createdAt', 'DESC']] })
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
        sponsor: req.body.sponsor,
        adminId: req.session.admin.id
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

    const asset = {
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category,
        sponsor: req.body.sponsor,
        adminId: req.session.admin.id
    }
    {req.file && (asset.image = req.file.filename)}
    // const upload = multer().single('image')
    // upload(req, res, (error) => {
    //     if (error instanceof multer.MulterError) {
    //       // A Multer error occurred when uploading.
    //       res.json({fileError: error.message})
    //     } else {
    //       // An unknown error occurred when uploading.
    //       res.json({fileError: error.message})
    //     }
    //       // Everything went fine.
    //       console.log(req.file)
    //   })
    

    // const existAsset = await Asset.findOne({where: {name: asset.name}})
    // if(existAsset) {
    //     await Asset.update(asset, {where: {id: assetId}})
    //     res.json({error: 'Asset already exist'})
    // }else {
        await Asset.update(asset, {where: {id: assetId}})
        res.json(asset)
    // }

}

const deleteAsset = async (req,res) => {
    const assetId = req.params.assetId
    Asset.destroy({
        where: { id: assetId },
        actor: req.session?.admin
    })
    res.json("Deleted")
}



//Asset Hook

Asset.afterCreate(async (asset) => {
    const admin = await Admin.findOne({where: {id: asset?.adminId}})
    const actor = admin?.dataValues
    await Audit.create({
        recordId: asset?.id,
        actor: `${actor?.firstName} ${actor?.middleName} ${actor?.lastName}`,
        description: `${asset?.name} has been created`,
        role: actor?.position
    })
})

Asset.afterBulkUpdate(async (asset) => {
    const admin = await Admin.findOne({where: {id: asset?.attributes.adminId}})
    const actor = admin?.dataValues
    await Audit.create({
        recordId: asset?.where.id,
        actor: `${actor?.firstName} ${actor?.middleName} ${actor?.lastName}`,
        description: `${asset?.attributes.name} has been updated`,
        role: actor?.position
    })
})

Asset.beforeBulkDestroy(async (asset) => {
    const deleted = await Asset.findOne({where: {id: asset?.where.id}})
    const deletedAsset = deleted?.dataValues
    const { actor } = asset
    await Audit.create({
        recordId: asset?.where.id,
        actor: `${actor?.firstName} ${actor?.middleName} ${actor?.lastName}`,
        description: `${deletedAsset?.name} has been deleted`,
        role: actor?.position
    })
})

module.exports = {
    getAssets,
    getSingleAsset,
    addAsset,
    updateAsset,
    deleteAsset,
}