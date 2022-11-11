/* eslint-disable no-undef */
import supertest from 'supertest';
// import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
// afterAll(() => sequelize.close());

describe('Testing get the parent information route', () => {
  test('Testing if the success path, the rote should return an array of object.', (done) => {
    supertest(app)
      .get('/api/v1/parent/info')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6Itiq2KfZhdixINmF2K3ZhdivIiwicm9sZSI6InBhcmVudCIsImlhdCI6MTY2ODA2NTcwMn0.I9ERwMdnst1DOMyFJ9GCy3Cka39_Xsqh7noxPuMNngo',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeDefined();
        return done();
      });
  });

  test('Testing the fail path, the user is not logged in.', (done) => {
    supertest(app)
      .get('/api/v1/parent/info')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('Testing the fail path, the user has a different role other than parent.', (done) => {
    supertest(app)
      .get('/api/v1/parent/info')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
