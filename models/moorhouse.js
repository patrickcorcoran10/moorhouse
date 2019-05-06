module.exports = function(sequelize, DataTypes) {
    const Moorhouse = sequelize.define('Moorhouses', {
        companyName: DataTypes.STRING,
        totalEmployees: DataTypes.STRING,
        avgCostPerEmployee: DataTypes.STRING,
        collectingData: DataTypes.STRING,
        analyzingData: DataTypes.STRING,
        dataBreachRisk: DataTypes.STRING,
        avgEmails: DataTypes.STRING,
        email: DataTypes.STRING,
        completed: DataTypes.BOOLEAN,
        dataCollectionSavings: DataTypes.STRING,
        dataProcessingSavings: DataTypes.STRING,
        complianceAndSecuritySavings: DataTypes.STRING,
        automationSavings: DataTypes.STRING,
        annualCompanyValue: DataTypes.STRING,
        standardROI: DataTypes.STRING,
        standardRevenue: DataTypes.STRING,
        plusRevenue: DataTypes.STRING,
        plusROI: DataTypes.STRING,
        opportunity: DataTypes.BOOLEAN,
        planSelect: DataTypes.STRING,
        standardRevenue: DataTypes.STRING,
        plusRevenue: DataTypes.STRING
    });
    return Moorhouse;
};