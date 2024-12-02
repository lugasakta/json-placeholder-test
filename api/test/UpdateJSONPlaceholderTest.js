const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const assert = chai.expect;

chai.use(chaiJsonSchema);

const page = require('../page/UpdateJSONPlaceholder.js');

const testCase = {
 "positive" : {
    "updateJSONPlacholderSuccessful" : "As a User, I want to be able to update JSON Placeholder",
 }
}

const responseSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        title: { type: "string" },
        body: { type: "string" },
        userId: { type: "number" }
    },
    required: ["id", "title", "body", "userId"]
};

describe('Update JSON Placholder', () => {
    it(`@post ${testCase.positive.updateJSONPlacholderSuccessful}`, async() => {
        const response = await page.updateJSONPlaceholder().send({
            title: 'Updated Post Title',
            body: 'This is the updated body content.',
            userId: 99,
        })

        // Validate response status
        assert(response.status).to.equal(200);

        // Validate jsonSchema
        assert(response.body).to.be.jsonSchema(responseSchema);

        assert(response.body).to.have.property('id')
        assert(response.body).to.have.property('title')
        assert(response.body).to.have.property('body')
        assert(response.body.id).to.equal(1)
        assert(response.body.title).to.equal('Updated Post Title')
        assert(response.body.body).to.equal('This is the updated body content.')
        assert(response.body.userId).to.equal(99)
        
        var SuccessfullCreateJsonPlaceholder = response.body;
        console.log(SuccessfullCreateJsonPlaceholder);
    })
})
