/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing delete a student from a class route!', () => {
  test('Testing the success path: the user is a teacher and the user is logged in', (done) => {
    supertest(app)
      .delete('/api/v1/class/8/student')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .send({ studentId: 8 })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data).not.toBeDefined();
        return done();
      });
  });

  test('The function should return 401 status with the Unauthenticated message', (done) => {
    supertest(app)
      .delete('/api/v1/class/8/student')
      .send({ studentId: 8 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('The function should return 401 status with the Unauthenticated message', (done) => {
    supertest(app)
      .delete('/api/v1/class/8/student')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Wrong data is inserted!');
        return done();
      });
  });
});
