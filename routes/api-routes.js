const db = require('../models');

module.exports = function(app) {
// Post Route for Form page
    app.post('/api/moorhouse', function(req, res) {
        db.Moorhouses.create({
            companyName: req.body.companyName,
            totalEmployees: req.body.totalEmployees,
            avgCostPerEmployee: req.body.avgCostPerEmployee,
            collectingData: req.body.collectingData,
            analyzingData: req.body.analyzingData,
            dataBreachRisk: req.body.dataBreachRisk,
            avgEmails: req.body.avgEmails,
            email: req.body.email,
            // dataCollectionSavings: req.body.dataCollectionSavings,
            // dataProcessingSavings: req.body.dataProcessingSavings,
            // complienceAndSecuritySavings: req.body.complienceAndSecuritySavings,
            // automationSavings: req.body.automationSavings,
            // annualCompanyValue: req.body.annualCompanyValue,
            // roi: req.body.roi,
            completed: false,
            opportunity: true,
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
// Get Request for Opps Page
    app.get('/api/opps', function(req, res) {
        db.Moorhouses.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
// Delete Route for Opps Page
    app.delete('/api/delete:id', function(req, res) {
        db.Moorhouses.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });

// Get Route for Display Page
    app.get('/api/display', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
// Get Route for Dashboard that will display the Number of Records in the Database coded with "Opportunity"
    app.get('/api/dashboard/number-of-opps', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                opportunity: true
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
// Get Route for Dashboard Completed Records
    app.get('/api/dashboard/number-of-completed', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                completed: true
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });
}