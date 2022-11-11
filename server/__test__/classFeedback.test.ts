import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing class routes', () => {
  test('Should return the statusCode 200 when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/1/feedback')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeDefined();
        expect(res.body.data.count).toBe(4);
        return done();
      });
  });

  test('Should return the statusCode 200 when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/1/feedback')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeDefined();
        expect(Array.isArray(res.body.data.rows)).toBe(true);
        return done();
      });
  });

  test('Should return the array of rows data when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/1/feedback')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
