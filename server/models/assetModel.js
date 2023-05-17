module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define("Asset", {
        image: {
            type: DataTypes.STRING,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            allowNull:true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        category: {
            type: DataTypes.STRING,
            allowNull:true
        },
        sponsor: {
            type: DataTypes.STRING,
            allowNull:true
        },
    })

    return Asset
}