DROP DATABASE IF EXISTS moorhouseROI;

CREATE DATABASE moorhouseROI;

use moorhouseROI;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

select * from Moorhouses;

INSERT INTO Moorhouses (companyName, totalEmployees, avgCostPerEmployee, collectingData, analyzingData, dataBreachRisk, avgEmails, email, competed, dataCollectionSavings, dataProcessingSavings, complienceAndSecuritySavings, automationSavings, annualCompanyValue, standardROI, standardRevenue, plusRevenue, plusROI, opportunity, planSelect, standardRevenue, plusRevenue)
VALUES ('Pepsi Co.', '3000', '50', '.025', '.05', '.03', '.1', 'email@mail.com', 0, '90000', '112000', '30000', '2000000', '32.23', '400000', '500000', '25.56','1', '15', )