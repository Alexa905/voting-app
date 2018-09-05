const expect = require('chai').expect;
const chai = require('chai');
const supertest = require('supertest');
const app = require('../index.js');
const request = supertest(app);
const uuid = require('uuid');
const stubData = require('../stubData').test;
const card = stubData[0];
const newCard= {
	"id": "1c0dcc79-05f3-416d-86c5-6dd93a17a14d",
	"title": "Tobruk2",
	"description": "Drama",
	"votes": 2,
}



describe('Test API', function (done) {
	after(function(done) {
		app.close();
		console.log('App is closed')
		done();
	});
	/*
	 * Test the /GET route
	 */
	describe('GET /api/cards', function () {
		it('returns a list of cards', function (done) {
			request.get('/api/cards')
				.expect(200)
				.end(function (err, res) {
					expect(res.body).to.have.lengthOf(2);
					done(err);
				});
		});
	});

// Testing the save card expecting status 201 of success
	describe('POST /cards', function () {
		it('saves a new card', function (done) {
			request.post('/api/cards')
				.send(newCard)
				.expect(201)
				.end(function (err, res) {
					done(err);
				});
		});
	});

// Here it'll be tested two behaviors when try to find a card by id
	describe('GET /api/card/:id', function () {
		// Testing how to find a card by id
		it('returns a card by id', function (done) {
			request.get('/api/card/' + newCard.id)
				.expect(200)
				.end(function (err, res) {
					expect(res.body.id).to.eql(newCard.id);
					expect(res.body.title).to.eql(newCard.title);
					done(err);
				});
		});

		// Testing the status 404 for card not found
		it('returns status 404 when id is not found', function (done) {
			request.get('/api/card/' + 'fakeId')
				.expect(404)
				.end(function (err, res) {
					done(err);
				});
		});
	});

// Testing how to update a card expecting status 201 of success
	describe('PUT /api/card/:id', function () {
		it('updates a card', function (done) {
			newCard.votes +=1;
			request.put('/api/card/' + newCard.id)
				.send(newCard)
				.expect(200)
				.end(function (err, res) {
					done(err);
				});
		});
	});

// Testing how to delete a card expecting status 201 of success
	describe('DELETE /api/card/:id', function () {
		it('removes a card', function (done) {
			request.delete('/api/card/' + newCard.id)
				.expect(200)
				.end(function (err, res) {
					done(err);
				});
		});
	});
});

