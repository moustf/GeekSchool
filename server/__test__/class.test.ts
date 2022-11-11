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
  test('Should return 200 status when the user is logged in as a teacher', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(typeof res.body).toBe('object');
        return done();
      });
  });

  test('Should return the success message in the success case.', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('The data is sent successfully!');
        return done();
      });
  });

  test('Should return the number of the students in a class', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.studentsNum).toBeDefined();
        return done();
      });
  });

  test('Should return the number of the assignments in a class', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.assignmentsNum).toBeDefined();
        return done();
      });
  });

  test('Should return the number of the questions in a class', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.questionsNum).toBeDefined();
        return done();
      });
  });

  test('Should return 401 because the token is invalid', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
