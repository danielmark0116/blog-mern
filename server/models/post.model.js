const mongoose = require('mongoose');

const Post = new mongoose.Schema(
  {
    id: {
      required: true,
      type: 'String'
    },
    title: {
      required: true,
      type: 'String'
    },
    content: {
      required: true,
      type: 'String'
    },
    author: {
      type: 'String',
      require: true
    },
    likes: {
      type: 'Number',
      require: true,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', Post);
