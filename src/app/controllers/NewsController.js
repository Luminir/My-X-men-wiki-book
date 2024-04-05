
class NewsController{

    // đặt là gì cũng được
    // [GET] /news
    index(req, res){
        res.render('news')
    }

    // [GET] /news/:slug
    // slug = bị dạng
    // VÍ DỤ: path/news/lap-trinh-blog ==> sẽ vào router là news trước
    show(req, res){
        res.send('NeWs DEtaiL!')
    }
}

// xuất thành file public cho cả project
module.exports = new NewsController;