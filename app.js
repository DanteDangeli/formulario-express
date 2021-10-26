const express = require('express');

const path = require('path');

const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname,'../public')));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(methodOverride('_method'));

const mainController = require('./routes/main');
app.use('/', mainController);

app.listen(3000, () => {
    console.log('Servidor andando')
});
