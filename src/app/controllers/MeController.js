const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class MeController {

    // [GET] me/stored/characters
    storedCharacters(req, res, next) {
        // res.send('Character Detail')
        Course.find({})
        .then(courses => res.render('me/stored-characters', {
            courses: multipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}

// xuất thành file public cho cả project
module.exports = new MeController();
