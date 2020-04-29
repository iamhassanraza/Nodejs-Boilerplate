const   job = require('../controllers/app.controllers');

const BASE_URL = '/api/v1';

module.exports = function(app){

    app.route(BASE_URL + '/get-jobs')
    .get(job.getJobs);

    app.route(BASE_URL + '/get-industries')
    .get(job.getIndustries);


};