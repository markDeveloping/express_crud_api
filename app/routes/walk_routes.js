module.exports = function(app, db) {

	var ObjectID = require('mongodb').ObjectID;

	app.get('/walks/:id', (req, res) => {
		const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('walks').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
      });

	 app.delete('/walks/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('walks').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Walk ' + id + ' deleted!');
      } 
    });
  });

	 app.put('/walks/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const walk = { text: req.body.body, title: req.body.title, dateAdded: req.body.dateAdded, featured: req.body.featured  };
    db.collection('walks').update(details, walk, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(walk);
      } 
    });
  });
  
  app.post('/walks', (req, res) => {
    const note = { text: req.body.body, title: req.body.title, dateAdded: req.body.dateAdded, featured: req.body.featured };
    db.collection('walks').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};