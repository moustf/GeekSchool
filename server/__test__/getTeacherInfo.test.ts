/* eslint-disable no-undef */
import supertest from 'supertest';
// import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
// afterAll(() => sequelize.close());

describe('Testing get teacherInfo route', () => {
  test('should return not auth because students are not allowed', (done) => {
    supertest(app)
      .get('/api/v1/teacher/info')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIcCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });

  test('should return the info for this teacher', (done) => {
    supertest(app)
      .get('/api/v1/teacher/info')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Teacher info');
        expect(res.body.data).toBeDefined();
        return done();
      });
  });

  test('should not return info because this is not auth', (done) => {
    supertest(app)
      .get('/api/v1/teacher/info')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });
});
