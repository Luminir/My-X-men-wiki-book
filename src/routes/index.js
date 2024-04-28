const newsRouter = require('./news'); // ./news = news.js
const siteRouter = require('./site'); // ./site = site.js
const characterRouter = require('./character') // ./character = character.js
const meRouter = require('./me');// ./me = me.js

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
    app.use('/me', meRouter); // bất kể thằng router nào chứa /me thì chạy 'me.js' thì get('/stored/character) => chọc vào me/stored/character
    app.use('/character', characterRouter);
    app.use('/', siteRouter);
}
// biến nó thành public file cho cả project
module.exports = route;
