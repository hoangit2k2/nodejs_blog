const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Course = new Schema(
  {
    name: {
      type: String,
      default: 'Not have name',
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    videoid: {
      type: String,
    },
    level: {
      type: String,
    },
    slug: { type: String, slug: 'name', unique: true },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

// Add plugins

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt: true });

module.exports = mongoose.model('Course', Course);
