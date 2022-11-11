/* eslint-disable no-undef */
import supertest from 'supertest';
// import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
// afterAll(() => sequelize.close());

describe('Testing class routes', () => {
  test('test update answer question should return unauthenticated', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/1')
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

  test('test update answer question should return answer', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/1')
      .send({
        answer: 'test test test',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.answer).toEqual('test test test');
        return done();
      });
  });

  test('test update answer question should return bad request', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/1')
      .send({
        answer: '',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('answer is required');
        return done();
      });
  });

  test('test update answer question should return Internal server error!', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/asda')
      .send({
        answer: 'test test test',
      })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(500)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Internal server error!');
        return done();
      });
  });
  test('test update answer question should return Unauthenticated', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/asda')
      .send({
        answer: 'test test test',
      })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });

  test('test update answer question should return Unauthenticated', (done) => {
    supertest(app)
      .put('/api/v1/class/1/questions/1')
      .send({
        answer: 'test test test',
      })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });
});
