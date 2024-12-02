const assert = require('chai').expect;
const chaiJsonSchema = require('chai-json-schema');

const page = require('../page/GetJSONPlaceholder.js');

const testCase = {
 "positive" : {
    "getJSONPlaceholderList" : "As a User, I want to be able to get JSON Placeholder list",
 }
}

const responseSchema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            id: { type: "number" },
            title: { type: "string" },
            body: { type: "string" },
            userId: { type: "number" }
        },
        required: ["id", "title", "body", "userId"]
    }
};

describe(`Get JSON Placeholder List`, () => {

 it(`@get ${testCase.positive.getJSONPlaceholderList}`, async() => {
   const response = await page.getJSONPlaceholderList();

   // Validate response status
   assert(response.status).to.equal(200);

   // Validate jsonSchema
   assert(response.body).to.be.jsonSchema(responseSchema);
   
   assert(response.body[0]).to.have.property('id');

   response.body.forEach(posts => {
    assert(posts.id).to.not.be.null;
  });

  var SuccessfullGetJsonPlaceholder = response.body[0];
  console.log(SuccessfullGetJsonPlaceholder);
 })
})
