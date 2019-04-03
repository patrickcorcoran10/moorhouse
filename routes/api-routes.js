const db = require('../models');

module.exports = function(app) {
    app.post('/api/submit', function(req, res) {
        db.moorhouses.create({
            companyName: req.body.companyName,
            totalEmployees: req.body.totalEmployees,
            avgCostPerEmployee: req.body.avgCostPerEmployee,
            collectingData: req.body.collectingData,
            analyzingData: req.body.analyzingData,
            dataBreachRisk: req.body.dataBreachRisk,
            avgEmails: req.body.avgEmails,
        })
        .then(function(dbData) {
            res.json(dbData)
        });
    });
}