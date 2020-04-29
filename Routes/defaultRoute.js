const express = require('express');
const router = express.Router();


router.get('/',function(req,res){


    res.status(200).send('SBS Express Server Running v1.1')
})

module.exports =router;
