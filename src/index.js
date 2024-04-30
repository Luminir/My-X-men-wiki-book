const path = require('path');
const express = require('express');
var morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const SortMiddleware = require('./app/middleware/SortMiddleware');
const exp = require('constants');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

// Connect to db
db.connect()

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

app.use(methodOverride('_method'))

// custom middlewares
app.use(SortMiddleware);

// HTTPS logger
// app.use(morgan('combined'))

// Template engine
 app.engine('.hbs', engine({ 
      extname: '.hbs',
      helpers: {
            sum: (a, b) => a + b,
            sortable: (fieldName, sort) => {
                  const sortType = fieldName === sort.column ? sort.type : 'default';
                  const icons = {
                        default: 'fa fa-sort',
                        asc: 'fa fa-sort-asc',
                        desc: 'fa fa-sort-desc',
                  };
                  const types = {
                        default: 'desc',
                        asc: 'desc',
                        desc: 'asc',
                  }
                  const icon = icons[sortType] // depends on the sort.type
                  const type = types[sortType]
                  return `<a href="?_sort&column=${fieldName}&type=${type}" style="font-size:15px"><button><i class="${icon}"></i></button></a>`;
            }
        } 
})); // 'handlebars' = handlebar()

      app.set('view engine', '.hbs'); // 'view engine' = handlebars()
app.set('views', path.join(__dirname, 'resources', 'view'));
// NÓ NGHĨA LÀ THẾ NÀY("Path: ", path.join(__dirname/resources/'views'))

// Home, search, contact - các file chỉ có 1 path ko bị kiểu: news/dfas/sdfadf

// Routes init
route(app);

app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});
