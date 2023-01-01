const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db/index');
var methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./router');

db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(methodOverride('_method'));
//app.use(morgan('combined'))
//teamlate enginer
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoruces/views'));

// Local host --- hosting

// Action ---> Dispatcher ---> Function handler

//Router Init
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
