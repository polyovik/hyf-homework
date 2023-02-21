const documents = require('./documents.json');

const searchDocumentsByQuery = (query) => {
  const filteredQuery = documents.filter((document) => {
    const values = Object.values(document).map((value) => value.toString());

    return values.some((value) => value.includes(query));
  });

  return filteredQuery
};

const searchDocumentsByFields = (fieldsToCheck) => {
  const filteredDocuments = documents.filter((document) => {
  
    return Object.keys(fieldsToCheck).every(field => {
      
      const value = fieldsToCheck[field].toString()

      return document[field] && document[field].toString() === value
    })
  });

  return filteredDocuments
}

module.exports = { searchDocumentsByQuery, searchDocumentsByFields }