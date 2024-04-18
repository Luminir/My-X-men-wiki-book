const newsRouter = require('./news'); // ./news = news.js
const siteRouter = require('./site'); // ./site = site.js

// tạo 1 funciton tên bất kì
function route(app) {
// app.get('/', (req, res) => {
//   res.render('home')
// })
// app.get('/news', (req, res) => {
//   res.render('news')
// })
// app.get('/search', (req, res) => {
//   return res.render('search')
// })
app.use('/news', newsRouter);
app.use('/', siteRouter);
}
// biến nó thành public file cho cả project
module.exports = route;
