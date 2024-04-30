const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class MeController {

    // [GET] me/stored/characters
    storedCharacters(req, res, next) {
        // res.json(res.locals._sort);

        let characterQuery = Course.find({})
        // check if _sort exists in query
        if (req.query.hasOwnProperty('_sort')){
            // res.json({ message: 'successfully!'});
            characterQuery = characterQuery.sort({
                // name: 'asc'
                // sort by query.column
                [req.query.column]: req.query.type,
            })
        }

        Promise.all([characterQuery, Course.countDocumentsDeleted()])
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
}

// xuất thành file public cho cả project
module.exports = new MeController();
