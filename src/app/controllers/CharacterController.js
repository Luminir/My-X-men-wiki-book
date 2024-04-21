const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class CharacterController {

    // [GET]: /character/:slug
    async show(req, res, next) {
        // res.send('Character Detail - ' + req.params.slug)
        try {
            const character = await Course.findOne({ slug: req.params.slug });
            // res.json(course); -- return data from DB
            res.render('courses/show', {course: mongooseToObject(character)})
        } catch (error) {
            next(error);
        }
    }

    // [GET]/ courses/create
    create(req, res, next) {
        // res.send('Character Detail')
        res.render('courses/create')
    }

    // [POST]/courses/store
    async store(req, res, next) {
        // res.send('Character Detail')
        // res.json(req.body)
        // res.send('NEW CHARACTER SAVED!');
        try{
            const formData = req.body;
            formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
            const character = new Course(req.body);
            await character.save()
            .then(doc => {
                console.log(doc);
              })
              .catch(err => {
                if (err.name === 'MongoError' && err.code === 11000) {
                  // Duplicate slug
                  res.send('Course already exists!');
                } else {
                  // Some other error
                  console.log(err);
                }
              });
            res.redirect('/');
        }catch(error){
            next(error)
        }
    }
}

// xuất thành file public cho cả project
module.exports = new CharacterController();
