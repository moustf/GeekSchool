/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing post recommended route', () => {
  test('should return Unauthenticated for this student', (done) => {
    supertest(app)
      .post('/api/v1/class/1/recommended')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });

  test('should add recommended for a specific class for this teacher', (done) => {
    supertest(app)
      .post('/api/v1/class/1/recommended')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .send({
        description: 'this is test add recommendation',
        materialLink: 'google.com',
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('add recommenation successfully');
        return done();
      });
  });

  test('should return bad request', (done) => {
    supertest(app)
      .post('/api/v1/class/1/recommended')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .send({
        materialLink: 'google.com',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Bad inserted data');
        return done();
      });
  });

  test('should return bad request', (done) => {
    supertest(app)
      .post('/api/v1/class/1/recommended')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .send({
        description: 'this is test add recommendation',
        materialLink: 0,
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Bad inserted data');
        return done();
      });
  });

  test('should not return recommended because this is not auth', (done) => {
    supertest(app)
      .post('/api/v1/class/1/recommended')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });
});
