DROP DATABASE IF EXISTS moorhouseROI;

CREATE DATABASE moorhouseROI;

use moorhouseROI;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

select * from Moorhouses;