const { Audit } = require('../models')

const getAudits = async (req,res) => {
    const listOfAudit = await Audit.findAll({ order:[['createdAt', 'DESC']] })
    res.json(listOfAudit)
}

module.exports = { getAudits }