const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.JSON_PLACEHOLDER_URL);

const deleteJSONPlaceholder = (page) => api.delete('/posts/1')

module.exports = {
   deleteJSONPlaceholder
}
