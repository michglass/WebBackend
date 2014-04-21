'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://mglass:eecs481@novus.modulusmongo.net:27017/uzare3gI'
  }
};