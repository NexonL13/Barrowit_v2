module.exports = (sequelize, DataTypes) => {

    const Audit = sequelize.define("Audit", {
        recordId: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        actor: {
            type: DataTypes.STRING,
            allowNull:true
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.STRING,
            allowNull:false
        },

    })

    return Audit
}
