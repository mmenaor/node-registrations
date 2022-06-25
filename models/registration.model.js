const { db, DataTypes } = require('../utils/database.util');

// Create our first model (tables)
const Registration = db.define('registration', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    }
});

module.exports = { Registration };