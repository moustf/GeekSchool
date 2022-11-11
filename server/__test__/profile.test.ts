/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/connection';

import app from '../app';
import buildModel from '../database/build';

jest.setTimeout(20000);

beforeAll(() => buildModel());
afterAll(() => sequelize.close());

describe('Testing the statistics router', () => {
  test('dummy test', () => {
    expect(1).toBe(1);
  });

  test('Should return all parents students', (done) => {
    supertest(app)
      .get('/api/v1/profile/parent/students')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoicGFyZW50IiwiaWF0IjoxNjY2ODU2OTg5fQ.zRPQHH51kwdsFlF4wDZP1kT7RCRmchw4YtflOFCWtYc',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('getting all student successfully');
        return done();
      });
  });

  test('Should return 401 because the token is invalid', (done) => {
    supertest(app)
      .get('/api/v1/profile/parent/students')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('Should return all classes for a specific teacher', (done) => {
    supertest(app)
      .get('/api/v1/profile/teacher/7/classes')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('getting all classes successfully');
        return done();
      });
  });

  test('Should return 401 because the token is invalid', (done) => {
    supertest(app)
      .get('/api/v1/profile/teacher/7/classes')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('Should return 401 because the token is invalid', (done) => {
    supertest(app)
      .get('/api/v1/profile/student/1/health')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
