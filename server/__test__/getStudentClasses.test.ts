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
      .get('/api/v1/student/1/classes')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY2Njk2OTcwOX0.fCtmQWvLsiKGQbk-v4Lq8yoe4Q3CbiC_02I1p0tAbjM',
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
      .get('/api/v1/student/1/classes')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY2Njk2OTcwOX0.fCtmQWvLsiKGQbk-v4Lq8yoe4Q3CbiC_02I1p0tAbjM',
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
      .get('/api/v1/student/1/classes')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoicGFyZW50IiwiaWF0IjoxNjY2ODU2OTg5fQ.zRPQHH51kwdsFlF4wDZP1kT7RCRmchw4YtflOFCWtYc',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toBe('Unauthenticated!');
        return done();
      });
  });

  test('Testing the failure path, when the user is logged in, it should return Unauthenticated', (done) => {
    supertest(app)
      .get('/api/v1/student/1/classes')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
