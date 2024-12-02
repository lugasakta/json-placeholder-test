const assert = require('chai').expect;
// const chaiJsonSchema = require('chai-json-schema');

const page = require('../page/DeleteJSONPlaceholder.js');

const testCase = {
 "positive" : {
    "deleteUsersList" : "As a User, I want to be able to delete JSON Placeholder",
 }
}

describe(`Delete JSON Placeholder`, () => {

    it(`@get ${testCase.positive.deleteUsersList}`, async() => {
      const response = await page.deleteJSONPlaceholder();
   
      // Validate response status
      assert(response.status).to.equal(200);

      assert(response.body).to.be.empty;

    var SuccessfullDeleteJsonPlaceholder = response.body;
    console.log(SuccessfullDeleteJsonPlaceholder);
    })
})
