/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing add new assignment route', () => {
  test('Testing add new assignment route: the test should return 201 with the data if the user is logged in and he is a teacher', (done) => {
    supertest(app)
      .post('/api/v1/class/1/assignment')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .send({ title: 'greeting', description: 'Hi ppl!' })
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).toBeDefined();
        return done();
      });
  });

  test('Should return the same title, description, and class_id if the user is logged in and he is a teacher', (done) => {
    supertest(app)
      .post('/api/v1/class/1/assignment')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Itij2LPZhdin2KEg2LnYqNiv2KfZhNmE2YciLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2Nzk4NTg2M30.MfQRyAHETKg--0Gi5JWpeWqRwIzgoZTyHgXmneVVLjU',
      ])
      .send({ title: 'greeting', description: 'Hi ppl!' })
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.title).toBe('greeting');
        expect(res.body.data.description).toBe('Hi ppl!');
        expect(res.body.data.class_id).toBe(1);
        return done();
      });
  });

  test('Should return 401 and Unauthenticated when there is no token or the token is invalid for this route!', (done) => {
    supertest(app)
      .post('/api/v1/class/1/assignment')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1Ni.eyJpZCI6MSwibmFtZSI6Ik11c3HMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .send({ title: 'greeting', description: 'Hi ppl!' })
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('Should return 400 and No title or description or both are given! message when there is no body given for this route!', (done) => {
    supertest(app)
      .post('/api/v1/class/1/assignment')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Wrong data is inserted!');
        return done();
      });
  });
});
