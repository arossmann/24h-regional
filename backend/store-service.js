const Store = require('./store-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Store.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(stores => {
      res.json(stores);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, products,location,url,source,open } = req.body;

  const store = new Store({ id, name, products,location,url,source,open });
  store
    .save()
    .then(() => {
      res.json(store);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
    const { id, name, products,location,url,source,open } = req.body;

  Store.findOne({ id })
    .then(store => {
      store.name = name;
      store.products = products;
      store.location = location;
      store.url = url;
      store.source = source;
      store.open = open;
      store.save().then(res.json(store));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Store.findOneAndRemove({ id })
    .then(store => {
      res.json(store);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };