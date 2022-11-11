/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing adding new feedback route', () => {
  test('Test the success path: the feedback should be created when the user is a student and he is logged in!', (done) => {
    supertest(app)
      .post('/api/v1/class/1/feedback')
      .send({ feedback: 'hello ppl!' })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhZ2hhZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjY2Mjg5Mjc0fQ.dsHq9BmBx-_ZfagLWt29PmabPVXmmMOdBRx0wrc7E_A',
      ])
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).toBeDefined();
        return done();
      });
  });

  test('The test should return the same student id and class id that is given in the request!', (done) => {
    supertest(app)
      .post('/api/v1/class/1/feedback')
      .send({ feedback: 'hello ppl!' })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhZ2hhZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjY2Mjg5Mjc0fQ.dsHq9BmBx-_ZfagLWt29PmabPVXmmMOdBRx0wrc7E_A',
      ])
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.class_id).toBe(1);
        expect(res.body.data.student_id).toBe(1);
        return done();
      });
  });

  test('The test should return 401 code with unauthenticated message!', (done) => {
    supertest(app)
      .post('/api/v1/class/1/feedback')
      .send({ feedback: 'hello ppl!' })
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('The test should return 400 with The data needed is not given! message when you he can not find body data', (done) => {
    supertest(app)
      .post('/api/v1/class/1/feedback')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhZ2hhZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjY2Mjg5Mjc0fQ.dsHq9BmBx-_ZfagLWt29PmabPVXmmMOdBRx0wrc7E_A',
      ])
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Wrong data is inserted.');
        return done();
      });
  });
});
