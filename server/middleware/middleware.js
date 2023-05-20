const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/src/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const middleware = {
  
  validateAuthSession: (req, res, next) => {
    const { admin } = req.session
    console.log(admin)
    if (!admin) {
      res.redirect("/login")
      res.json({ error: "Please login" })
    } else {
      next()
    }
  },

upload: multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb(new Error('Invalid file type'))
    }
})
}

module.exports = middleware
