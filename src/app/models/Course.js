const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const { TRUE } = require('node-sass');

const Schema = mongoose.Schema;

// configuring the DATABASE DATA structure
// require: true = must have A name
const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String},
    videoId: {type: String, require: true},
    level: {type: String, maxLength: 255},
    slug: {type: String, slug:'name'}, // turning name into a slug // slug will be unique - không bị trùng
  }, {timestamps: true}); // auto create createAt and updateAt

  // Add plugins
  mongoose.plugin(slug);
  Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: true, 
  });

  // export
  module.exports = mongoose.model('Course', Course);
  