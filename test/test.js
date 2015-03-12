var request = require('supertest');
var app = require('../app.js');


describe('GET /', function(){
  it('respond with html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  })
})

describe('POST /api', function(){
  it('respond with specific json', function(done){
    request(app)
      .post('/api')
      .send({ username: 'jojo', email: 'jojo@gmail.com' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({ username: 'jojo', email: 'jojo@gmail.com' })
      .expect(200, done);
  })
})
