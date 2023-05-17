const { Audit } = require('../models')

const getAudits = async (req,res) => {
    const listOfAudit = await Audit.findAll()
    res.json(listOfAudit)
}

module.exports = { getAudits }