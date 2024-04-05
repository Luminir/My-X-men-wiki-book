
class SiteController{

    // HOME
    // [GET] /
    index(req, res){
        res.render('home')
    }

    // SEARCH
    // [GET] /search
    search(req, res){
        res.render('search')
    }
}

// xuất thành file public cho cả project
module.exports = new SiteController;