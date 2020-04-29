
const express = require('express'),
    app = express(),
    defaultRoute = require('./Routes/checkServer'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');
    

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser());
    app.use(cors());

    app.use(morgan('tiny'));




app.use('/',defaultRoute);
require('./Routes/app.routes')(app);




app.listen(process.env.PORT || 8081);
exports = module.exports = app;