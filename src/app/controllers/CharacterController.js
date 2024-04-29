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

    // [GET]/ character/create
    create(req, res, next) {
        // res.send('Character Detail')
        res.render('courses/create')
    }

    // [POST]/character/store
    async store(req, res, next) {
        // res.send('Character Detail')
        // res.json(req.body)
        // res.send('NEW CHARACTER SAVED!');
        try{
            req.body.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
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
            res.redirect('/me/stored/characters');
        }catch(error){
            next(error)
        }
    }

    // [GET] /character/:id/edit
    async edit(req, res, next){
        await Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }

    // [PUT] /character/:id
    async update(req, res, next) {
        // res.json(req.body)
        await Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/me/stored/characters'))
        .catch(next);
    }

    // [DELETE] /character/:id/force
    forceDelete(req, res, next){
        Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }

    // [DELETE] /character/:id
    delete(req, res, next){
        Course.delete({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }

    // [PATCH] /character/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

// xuất thành file public cho cả project
module.exports = new CharacterController();
