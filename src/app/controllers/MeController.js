const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class MeController {

    // [GET] me/stored/characters
    storedCharacters(req, res, next) {
        // res.json(res.locals._sort);

        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-characters', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            )
            .catch(next);
    }

    deletedCharacters(req, res, next) {
        Course.findDeleted({})
        .then(courses => res.render('me/deleted-characters', {
            courses: multipleMongooseToObject(courses)
        }))
        .catch(next);
    }

    newsCharacters(req, res, next) {
        res.render('me/news');
    }
}

// xuất thành file public cho cả project
module.exports = new MeController();
