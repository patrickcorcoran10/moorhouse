const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

const db = require('./models');

require('./routes/api-routes')(app);

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("We're listening now on PORT " + PORT)
    })
});