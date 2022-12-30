// const express = require('express')
// const app = express()
// const port = 3000;


// // Render Html File
// app.get('/', function(req, res) {
//   res.send("<h1>Hi</h1>");
// });


// app.listen(port, () => {
//   // Code.....
// })
const express = require('express');
// const path= require('path');

// app.use(express.static('public'));


const app = express();

app.get('/', (req, res) => {
  res.sendFile("/home/runner/Personal-Portfolio-Website/index.html");
});

app.get('/contact',(req,res)=>{
  res.sendFile("/home/runner/Personal-Portfolio-Website/form.html");
})

app.get('/test',(req,res)=>{
  res.sendFile("/home/runner/Personal-Portfolio-Website/test.html");
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
