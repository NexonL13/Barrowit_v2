const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const port = 3000

const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(session({
    key: 'admin_id',
    secret: 'zeieist',
	resave: false,
    saveUninitialized: true,
	cookie: {
	    maxAge: 24 * 60 * 60 * 1000,
	    secure: false,
        httpOnly: true,
        sameSite: 'strict'
	}
}))


const adminRouter = require('./routes/admin')
const assetRouter = require('./routes/asset')
app.use('/auth', adminRouter)
app.use('/asset', assetRouter)

db.sequelize.sync().then(()=> {
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    })
})

