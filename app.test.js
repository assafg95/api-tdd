const request = require('supertest');
const app = require('./app');

describe("Todos API", () => {
    it('GET /todos --> array todos', () => {
        return request(app)
            .get('/todos')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name: expect.any(String),
                            completed: expect.any(Boolean)
                        })
                    ])
                );
            });
    });
    it('GET /todos/id --> specific todo by Id', () => {

    });
    it('Get /todos/id --> 404 if todo not found', () => {

    });
    it('POST /todos --> add a new todo', () => {

    });
    it('GET /todos --> validates request body', () => {

    });
    
});

