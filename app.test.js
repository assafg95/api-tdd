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
                            id: expect.any(Number),
                            name: expect.any(String),
                            completed: expect.any(Boolean)
                        })
                    ])
                );
            });
    });
    it('GET /todos/id --> specific todo by Id', () => {
        return request(app)
            .get('/todos/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body).toEqual(
                    
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    })
                    
                );
            });
    });
    it('Get /todos/id --> 404 if todo not found', () => {
        return request(app).get('/todos/9999999').expect(404);
    });
    it('POST /todos --> add a new todo', () => {
        return request(app).post('/todos').send({
            name: 'Do dishes'
            
        }).expect(201).expect('Content-Type', /json/).then(
            response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: 1,
                        name: 'Do dishes',
                        completed: false
                    })
                );
            }
        )
    });
    it('GET /todos --> validates request body', () => {
        return request(app).post('/todos').send({ name: 123 }).expect(422);
    });
    
});

