const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));
//app.use(morgan('combined'))
//teamlate enginer
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'resoruces/views'))

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/search',(req,res) => {
  console.log(req.query.q);
  console.log(req.query.auth);
  res.render('search')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})