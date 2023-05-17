const { Admin } = require('../models')
const bcrypt = require('bcrypt')

const registerAdmin = async (req, res) => {
    const { firstName, middleName, lastName, email, password, position} = req.body

    const existAccount = await Admin.findOne({where: {firstName: firstName, middleName: middleName, lastName: lastName, email: email}})
    if(existAccount) {
        res.json({error:"Already Exists"})
    }else {
    bcrypt.hash(password, 10).then((hash) => {
         Admin.create({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            password: hash,
            position: position
        })
    res.json("Success")
    })
    }
}

const isLoggedIn = (req, res) => {
    if(req.session.admin) {
        return res.json({loggedIn: true, admin: req.session.admin})
    }else {
        return res.json({loggedIn: false})
    }
}

const loginAdmin = async (req,res) => {
    const { email, password } = req.body
    const admin = await Admin.findOne({where: {email: email}})
    if(admin) {
        bcrypt.compare(password, admin.password).then((match) => {
            if(!match) {
                return res.json({error:"Incorrect username and password"})
            }else {
                req.session.admin = admin
                return res.json({loggedIn: true})
            }
        })
    }else {
        return res.json({loggedIn: false})
    }
}

const logoutAdmin = (req, res) => {
    if(req.session.admin && req.cookies.admin_id) {
        res.clearCookie('admin_id') 
        res.json({loggedIn: false})
        return res.end()
    }
}


module.exports = { registerAdmin, loginAdmin, isLoggedIn, logoutAdmin }