const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const assert = chai.expect;

chai.use(chaiJsonSchema);

const page = require('../page/PostJSONPlaceholder.js');

const testCase = {
 "positive" : {
    "postJSONPlacholderSuccessful" : "As a User, I want to be able to create a new POST in JSON Placeholder",
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

describe('JSON Placholder POST', () => {
    it(`@post ${testCase.positive.postJSONPlacholderSuccessful}`, async() => {
        const response = await page.createSuccessfullNewPost().send({
            title: 'Learn API Testing',
            body: 'Practicing API testing with JSONPlaceholder',
            userId: 101,
        })

        // Validate response status
        assert(response.status).to.equal(201);

        // Validate jsonSchema
        assert(response.body).to.be.jsonSchema(responseSchema);

        assert(response.body).to.have.property('id')
        assert(response.body).to.have.property('title')
        assert(response.body).to.have.property('body')
        assert(response.body.id).to.equal(101)
        assert(response.body.title).to.equal('Learn API Testing')
        assert(response.body.body).to.equal('Practicing API testing with JSONPlaceholder')
        assert(response.body.userId).to.equal(101)
        
        var SuccessfullCreateJsonPlaceholder = response.body;
        console.log(SuccessfullCreateJsonPlaceholder);
    })
})