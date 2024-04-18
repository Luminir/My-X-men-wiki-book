const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
// HOME
// [GET] /
// CONTROLLER MVC
async index(req, res, next) {
    // MODEL MVC
    try {
        // TAKE DATA MVC
        let courses = await Course.find({});
        // return VIEWS MVC
        res.render('home', {courses: multipleMongooseToObject(courses)})

    } catch (error) {
        next(error)
        // res.status(400).json({error: 'ERROR!!!'});
    }
    // res.render('home');
}

// SEARCH
// [GET] /search
search(req, res) {
    res.render('search');
}
}

// xuất thành file public cho cả project
module.exports = new SiteController();
