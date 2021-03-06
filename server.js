require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;
const mongoose = require('mongoose')
/*const ConnectionModel = require('./models/ConnectionModel');*/

/*mongoose.connect(process.env.URL, { useNewUrlParser: true });*/

mongoose.connect(process.env.URL, { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado a BD.');
    app.emit('OK');
  })
  .catch(e => console.log(e));

  const session = require('express-session');
  const MongoStore = require('connect-mongo');
  const flash = require('connect-flash');

  app.use(session({
    secret: '152637485960',
    //store: new MongoStore({ mongooseConnection: mongoose.Connection }),
    store: MongoStore.create({ mongoUrl: process.env.URL}),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000*60*60*24*2,
      httpOnly: true}
    })
  );

  //app.use(sessionOptions);
  app.use(flash());

/*const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', URL)
});

db.on('error', err => {
  console.error('connection error:', err)
});*/

app.set('view engine', 'ejs');

app.use(routes);
app.use((req, res, next) => {
  res.render('pages/error404')
});

/*app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/index2', (req, res) => {
  res.render('pages/index2');
});

app.get('/menu', (req, res) => {
  res.render('pages/menu');
});

app.get('/menuPDF', function(req, res) {
  res.sendFile(__dirname + "/Ementa_Menu.pdf");
})

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/faq', (req, res) => {
  res.render('pages/faq');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});*/

app.on('OK', () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Acesse http://localhost:${port}`);
  })
});
