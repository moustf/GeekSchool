import supertest from 'supertest';
// import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
// afterAll(() => sequelize.close());

describe('Testing get the students for a specific teacher route.', () => {
  test('Testing the success path, when the user is logged in and the role of him is teacher. The statusCode should be 200.', (done) => {
    supertest(app)
      .get('/api/v1/teacher/students')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Testing the success path, when the user is logged in and the role of him is teacher', (done) => {
    supertest(app)
      .get('/api/v1/teacher/students')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(Array.isArray(res.body.data)).toBe(true);
        return done();
      });
  });

  test('Testing the failure path, when the user is logged in and the role of him is not teacher, it should return Unauthenticated', (done) => {
    supertest(app)
      .get('/api/v1/teacher/students')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoicGFyZW50IiwiaWF0IjoxNjY2ODU2OTg5fQ.zRPQHH51kwdsFlF4wDZP1kT7RCRmchw4YtflOFCWtYc',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('Testing the failure path, when the user is logged in, it should return Unauthenticated', (done) => {
    supertest(app)
      .get('/api/v1/teacher/students')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
