// routes/index.js
const noteRoutes = require('./note_routes');
const walkRoutes = require('./walk_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  walkRoutes(app, db);
  // Other route groups could go here, in the future
};