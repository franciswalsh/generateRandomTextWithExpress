const express = require('lorem-ipsum');
const app = loremIpsum();

app.get('/hello', function(req, res){
  res.send('hello!');
});

app.get('/goodbye', function(req, res){
  res.send('goodbye!');
});
app.get('/', function(req, res){
  res.send('home screen');
});
app.listen(3000, function(){
  console.log("Successfully started express application!")
});
