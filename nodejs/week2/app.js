const { response } = require('express');
const express = require('express');
const app = express();
const documents = require('./documents.json');
const port = process.env.PORT || 3000;
const controller = require('./controller');

// Support parsing JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', controller.search);

app.get('/documents/:id',  controller.getById);

app.post('/search', controller.extendedSearch);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
