const { Admin } = require('../models')
const bcrypt = require('bcrypt')

const getAdmins = async (req, res) => {
    const listOfAdmins = await Admin.findAll()
    res.json(listOfAdmins)
}

const registerAdmin = async (req, res) => {
    const { firstName, middleName, lastName, email, password, position} = req.body

    const existAccount = await Admin.findOne({where: {email: email}})
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
        return res.json({loggedIn: false, error:"Incorrect email"})
    }
}

const logoutAdmin = (req, res) => {
        res.clearCookie('admin_id') 
        res.json({loggedIn: false})
        res.end()
}


module.exports = { registerAdmin, loginAdmin, isLoggedIn, logoutAdmin, getAdmins }