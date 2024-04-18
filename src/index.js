const path = require('path');
const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const exp = require('constants');
const app = express();
const port = 3000;

const route = require('./routes');

// joining __dirname with 'public' directory, means: __dirname == /public/...
// so localhost3030/img/logo.png == localhost3030'/public/'/img/logo.png
app.use(express.static(path.join(__dirname, 'public')));

// Middleware stuff: that help 'req.body' get pass middleware body guard
app.use(
express.urlencoded({
extended: true,
}),
);
app.use(express.json());

// HTTPS logger
// app.use(morgan('combined'))

// Template engine
 app.engine('.hbs', engine({ extname: '.hbs' })); // 'handlebars' = handlebar()
      app.set('view engine', '.hbs'); // 'view engine' = handlebars()
app.set('views', path.join(__dirname, 'resources/view'));
// console.log("Path: ", path.join(__dirname, 'views'))

// Home, search, contact - các file chỉ có 1 path ko bị kiểu: news/dfas/sdfadf

// Routes init
route(app);

app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});
