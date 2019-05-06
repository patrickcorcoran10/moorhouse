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
            dataCollectionSavings: req.body.dataCollectionSavings,
            dataProcessingSavings: req.body.dataProcessingSavings,
            complianceAndSecuritySavings: req.body.complianceAndSecuritySavings,
            automationSavings: req.body.automationSavings,
            annualCompanyValue: req.body.annualCompanyValue,
            standardROI: req.body.standardROI,
            plusROI: req.body.plusROI,
            standardRevenue: req.body.standardRevenue,
            plusRevenue: req.body.plusRevenue,
            completed: false,
            opportunity: true,
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
// Get Request for Opps Page
    app.get('/api/opps', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                completed: false
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
// Get Request for Opps Page Completed Table
    app.get('/api/opps/completed', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                completed: true
            }
        })
        .then(function(dbDataPoints) {
            res.json(dbDataPoints)
        })
    })
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

// Get Route for View Page
    app.get('/api/view:id', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
// Get Route for the Display Page
    app.get('/api/display:id', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });
// UPDATE Route for the View Page
    app.put('/api/update:id', function(req, res) {
        db.Moorhouses.update({
            planSelect: req.body.planSelect,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
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
// Get Route for the Dashboard Revenue Array
    app.get('/api/dashboard/revs', function(req, res) {
        db.Moorhouses.findAll({
            where: {
                completed: false
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });
// Update Route on the Opps page for Completed
    app.put('/api/opps/complete:id', function(req, res) {
        db.Moorhouses.update({
            completed: true,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });
// Update Route on the Opps page for Not Completed
    app.put('/api/opps/notComplete:id', function(req, res) {
        db.Moorhouses.update({
            completed: false,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbData) {
            res.json(dbData)
        })
    });
}