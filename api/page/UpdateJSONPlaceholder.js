const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.JSON_PLACEHOLDER_URL);

const updateJSONPlaceholder = (page) => api.put('/posts/1')

module.exports = {
   updateJSONPlaceholder
}
