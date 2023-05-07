const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const port = 3000


app.use(express.json())
app.use(cors())


const adminRouter = require('./routes/admin')
const assetRouter = require('./routes/asset')
app.use('/auth', adminRouter)
app.use('/asset', assetRouter)

db.sequelize.sync().then(()=> {
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    })
})

