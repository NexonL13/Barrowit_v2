const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const port = 3000


app.use(express.json())
app.use(cors())



const adminRouter = require('./routes/admin')
app.use('/auth', adminRouter)

db.sequelize.sync().then(()=> {
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    })
})

