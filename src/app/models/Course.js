const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const { TRUE } = require('node-sass');

const Schema = mongoose.Schema;

// configuring the DATABASE DATA structure
// require: true = must have A name
const CourseSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String},
    videoId: {type: String, require: true},
    level: {type: String, maxLength: 255},
    slug: {type: String, slug:'name'}, // turning name into a slug // slug will be unique - không bị trùng
  }, {timestamps: true}); // auto create createAt and updateAt

  CourseSchema.query.sortable = function (req) {
      // check if _sort exists in query
      if (req.query.hasOwnProperty('_sort')){
        // res.json({ message: 'successfully!'});

        // Prevent query injection attack
        const isValidType = ['asc', 'desc'].includes(req.query.type);

        return this.sort({
            // name: 'asc'
            // sort by query.column
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
      }
      return this;
  }

  // Add plugins
  mongoose.plugin(slug);
  CourseSchema.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: true, 
  });

  // export
  module.exports = mongoose.model('Course', CourseSchema);
  