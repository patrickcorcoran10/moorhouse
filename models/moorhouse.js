module.exports = function(sequelize, DataTypes) {
    const Moorhouse = sequelize.define('moorhouse', {
        companyName: DataTypes.STRING,
        totalEmployees: DataTypes.STRING,
        avgCostPerEmployee: DataTypes.STRING,
        collectingData: DataTypes.STRING,
        analyzingData: DataTypes.STRING,
        dataBreachRisk: DataTypes.STRING,
        avgEmails: DataTypes.STRING,
        email: DataTypes.STRING
    });
    return Moorhouse;
}