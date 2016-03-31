var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'roomi-express'
    },
    port: 3000,
    db: 'mongodb://localhost/roomi-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'roomi-express'
    },
    port: 3000,
    db: 'mongodb://localhost/roomi-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'roomi-express'
    },
    port: 3000,
    db: 'mongodb://localhost/roomi-express-production'
  }
};

module.exports = config[env];
