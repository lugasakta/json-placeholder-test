const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.JSON_PLACEHOLDER_URL);

const getJSONPlaceholderList = (page) => api.get('/posts')

module.exports = {
   getJSONPlaceholderList
}