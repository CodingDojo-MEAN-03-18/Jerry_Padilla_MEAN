const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;

var app = express()

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'sekerreeet'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



function what_route(url){
     console.log('Requesting url...',url);
}



app.get('/', function(req, res){
     what_route(req.url);
     res.render('index');
})


app.post('/result', function(req, res){
     what_route(req.url);
     
     req.session.postData = {
          name: req.body.name,
          location: req.body.location,
          language: req.body.language,
          comment: req.body.comment,
     }
     res.redirect('/results')
})


app.get('/results', function(req, res){
     what_route(req.url);
     if (!req.session.postData){
          console.log('Error******* Session not defined yet..')
          res.redirect('/');
     }
     res.render('results', {session: req.session.postData})
})

app.get('/destroy', function(req, res){
     req.session.destroy();
     res.redirect('/')
})


app.listen(port, function(){
     console.log('Listening on port...',port);
})
