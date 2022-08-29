const path = require('path');
const express = require('express')
const mgorgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'))
//teamlate enginer
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'resoruces/views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})