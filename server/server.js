const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Admin } = require('./models')
const multer = require('multer')
const port = 3000

const session = require('express-session')

app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.urlencoded({extended: true}))

app.use(session({
    key: 'admin_id',
    secret: 'zeieist',
	resave: false,
    saveUninitialized: true,
	cookie: {
	    secure: false,
        httpOnly: true,
        sameSite: 'strict',
	}
}))


const adminRouter = require('./routes/admin')
const assetRouter = require('./routes/asset')
const auditRouter = require('./routes/audit')
app.use('/auth', adminRouter)
app.use('/asset', assetRouter)
app.use('/audit', auditRouter)

db.sequelize.sync().then(()=> {
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    })
    let password = 'test123'
    bcrypt.hash(password, 10).then((hash) => {
        Admin.findOrCreate({
            where: {email: 'superadmin@gmail.com'},
                    defaults: {
                        firstName: "Super",
                        middleName: "Admin",
                        lastName: "Auth",
                        email: "superadmin@gmail.com",
                        password: hash,
                        position: "Super Admin"
                    }
        })
    })
    
})

