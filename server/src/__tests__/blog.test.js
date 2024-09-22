const { mongoConnect, mongoDisConnect } = require('../services/mongo')
const { app } = require('../app')
const request = require('supertest')


describe("Blog API", () => {

    beforeAll(async () => {
        await mongoConnect()
    })

    afterAll(async () => {
        await mongoDisConnect()
    })


    describe('Test GET /blogs', () => {

        test("It Should respond with 200 success", async () => {
            const response = await request(app)
                .get('/v1/blogs')
                .expect('Content-Type', /json/)
                .expect(200)
        })

    })


    describe('Test GET /blog/:blogId', () => {
        const blogId = "blog123"; // Invalid blogId

        test("It should return 404 for invalid blogId", async () => {
            const response = await request(app)
                .get(`/v1/blogs/${blogId}`)
                .expect(404);

            expect(response.body).toEqual({ message: "Invalid Blog Id" });
        });
    });



})