/* eslint-disable no-undef */
import supertest from 'supertest';
// import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
// afterAll(() => sequelize.close());

describe('sign in router', () => {
  test("check if the email doesn't exist", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'most07173@gmaiasdasdl.com',
        loginPassword: '123',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("email doesn't exist");
        return done();
      });
  });

  test('check if the password is invalid', (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'rami@gmail.com',
        loginPassword: '123',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('invalid password');
        return done();
      });
  });
});
