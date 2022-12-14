const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use((request,response,next) => {
response.setHeader('Access-Control-Allow-Origin', '*');
response.setHeader('Access-Control-Methods', 'POST, GET, OPTIONS');
response.setHeader('Access-Control-Headers', 'Content-Type');
next();
});

app.use(locationRoutes);

// app.use((request, response, next) => {
//   response.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((request, response, next) => {
//   const userName = request.body.username || 'Unknown User';

//   response.render('index', {
//     user: userName
//   });

//   // response.send('<h1>Hi ${userName}</h1><form method= "POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>');
// });

app.listen(3000);