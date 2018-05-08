var express = require('express');
var router = express.Router();
var request=require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'movieapi' });
});router.post('/movie',function(req,res){

  var name=req.body.moviename;

var url="https://api.themoviedb.org/3/search/movie?api_key=c7cbd5c5915a6a73e567c9c3fbd1a0f1&query="+name+"";
  request(url, function (err, response, body) {
    if(err){
     console.log('error:', error);
   } else {
     var moviename = JSON.parse(body);
    // console.log(moviename);
     var message= moviename.results[2].overview;


console.log(message);
      res.render('sucess',{moviename:message});

    }
  });

});


module.exports = router;

