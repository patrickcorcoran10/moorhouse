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
            completed: false
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
}