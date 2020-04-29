const request =require('request'),
jobs = require('../models/app.models');

exports.getJobs = function(req, res){
    
    
    let designation = req.query.designation;
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let radius = req.query.radius;


    if(!designation || !latitude || !longitude ||!radius){
        console.log(`jobs.controller.getJobs: Less or No Params`);
        res.status(400).send('Malformed request');
    }
    else{
        console.log("designation : " + designation)
        console.log("latitude : " + latitude)
        console.log("longitude : " + longitude)
        console.log("radius : " + radius)
        let url="https://myopportunity.com/serviceapi/jobs?designation="+designation+"&lat="+latitude+"&lng="+longitude+"&api_key=da7f3339-adf8-4ca9-b952-7a348e564631&radius="+radius;
        jobs.GetData(url,null,function(body){
            if(body)
            {
                console.log('not undefined')
                let newResponse = { 
                    response:body,
                    url:url
                }
                res.status(200).send(newResponse)
            }

            else  
            {
                console.log('undefined')
                let newResponse = { 
                    response:body,
                    url:url
                }
                res.status(200).send(newResponse)
            }
   
        })
    }
    
};


exports.getIndustries = function(req, res){


    let url="https://myopportunity.com/serviceapi/industries?api_key=da7f3339-adf8-4ca9-b952-7a348e564631";
    jobs.GetData(url,null,function(body){
        if(body)
        {
            console.log('not undefined')
            let newResponse = { 
                response:body,
                url:url
            }
            res.status(200).send(newResponse)
            return;
        }

        else  
        {
            console.log('undefined')
            let newResponse = { 
                response:body,
                url:url
            }
            res.status(200).send(newResponse)
            return;
        }

    })
}