const https = require("https");

const   GetData =   (url,req,functions) => {


https.get(url, res => {
    
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
   res.on("end",  () => {
      
    if(body)
    {
      body= JSON.parse(body) 
      console.log(body)
    }
    
   

    functions(body);
   
  });
});

}




module.exports = {
    GetData: GetData
};
