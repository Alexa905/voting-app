const expect = require('chai').expect;
const chai = require('chai');
const supertest = require('supertest');
const app = require('../index.js');
const request = supertest(app);
const uuid = require('uuid');

/*
 * Test the /GET route
 */

describe('GET /cards', function() {
	it('returns a list of cards', function(done) {
		request.get('/api/cards')
			.expect(200)
			.end(function(err, res) {
				expect(res.body).to.have.lengthOf(2);
				done(err);
			});
	});
});

// Testing the save card expecting status 201 of success
describe('POST /cards', function() {
	it('saves a new card', function(done) {
		request.post('/api/cards')
			.send({
				title: 'new Movie',
				description: 'Comedy',
				votes:2
			})
			.expect(201)
			.end(function(err, res) {
				done(err);
			});
	});
});

// Here it'll be tested two behaviors when try to find a card by id
describe('GET /cards/:id', function() {
	// Testing how to find a card by id
	it('returns a card by id', function(done) {
		var card = app.db('cards').first();
		request.get('/cards/' + card.id)
			.expect(200)
			.end(function(err, res) {
				expect(res.body).to.eql(card);
				done(err);
			});
	});

	// Testing the status 404 for card not found
	it('returns status 404 when id is not found', function(done) {
		var card = {
			id: 'fakeId'
		}
		request.get('/cards/' + card.id)
			.expect(404)
			.end(function(err, res) {
				done(err);
			});
	});
});

// Testing how to update a card expecting status 201 of success
describe('PUT /cards/:id', function() {
	it('updates a card', function(done) {
		var card = app.db('cards').first();
		request.put('/cards/' + card.id)
			.send({
				title: 'travel',
				done: false
			})
			.expect(201)
			.end(function(err, res) {
				done(err);
			});
	});
});

// Testing how to delete a card expecting status 201 of success
describe('DELETE /cards/:id', function() {
	it('removes a card', function(done) {
		var card = app.db('cards').first();
		request.put('/cards/' + card.id)
			.expect(201)
			.end(function(err, res) {
				done(err);
			});
	});
});

