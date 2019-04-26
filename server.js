const express = require("express");
const request = require('request')

const app = express();

app.get('/api/v1/lrtlive',  (req, res) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by", );
  request(`https://www.lrt.lt/static/tvprog/tvprog.json`,  (error, response, body) => {
      if(error) {
          // If there is an error, tell the user 
          res.send('An erorr occured')
      }
      // Otherwise do something with the API data and send a response
      else {
          res.send(body)
      }
  });
});

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
