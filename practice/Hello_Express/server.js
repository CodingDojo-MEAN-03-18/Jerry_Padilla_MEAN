var express = require('express');

var app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');




app.get('/', function(request, response){
     console.log("Client requesting...", '"',request.url,'"');
     response.send('<h1>Hello Express</h1>');
})

app.get('/users', function(request, response){
     const users_array = [
          {name: 'Jerry', email: "jerrypadilla23@gmail.com"},
          {name:'Chris', email: 'chris@gmail.com'},
          {name:'Dude', email: 'dudechris@gmail.com'},
          {name:'Bro', email: 'dudebrochrisjerry@gmail.com'},
     ];
     console.log(users_array)
     response.render('users',{users: users_array});
})
//
// app.use(express.static(__dirname + '/static'));
//

app.listen(8000, function(){
     console.log('Listening on port 8000 bitch...');
});
