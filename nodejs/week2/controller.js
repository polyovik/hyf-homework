const documents = require('./documents.json');
const service = require('./service');

const search = (req, res) => {
  try {
    const query = req.query.q;
    if (query) {
      const filteredQuery = service.searchDocumentsByQuery(query);

      return res.json(filteredQuery);
    } else {
      return res.json(documents);
    }
  } catch (error) {
    throw error;
  }
};

const getById = (req, res) => {
  try {
    const id = req.params.id;
    const foundDocument = documents.find((document) => document.id.toString() === id);
    if (!foundDocument) {
      return res.status(404).json({ message: '404 Not Found' });
    }

    return res.json(foundDocument);
  } catch (error) {
    throw error;
  }
};

const extendedSearch = (req, res) => {
  try {
    const query = req.query.q;
    const fields = req.body.fields;
    if (query && fields) {
      return res.status(400).json({ message: '400 Bad Request' });
    } else if (query) {
      console.log(1);
        const filteredQuery = service.searchDocumentsByQuery(query);

        return res.json(filteredQuery);
    } else if (fields) {
      console.log(2);
      const filteredDocuments = service.searchDocumentsByFields(fields)

      return res.json(filteredDocuments);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { search, getById, extendedSearch };
