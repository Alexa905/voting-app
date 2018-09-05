'use strict'

const express = require('express')
const router = express.Router()

const {card} = require("./models");

router.route('/cards/')
	.get(function (req, res, next) {
		card.findAll()
			.then(data => res.json(data))
			.catch(e => res.status(404).send(e))
	})
	.post(function (req, res, next) {
		card.create(req.body)
			.then(() => res.status(201).send(req.body))
			.catch(e => res.status(500).send(e))
	});

router.route('/card/:id')
	.get(function (req, res, next) {
		card.findById(req.params.id)
			.then(data => res.json(data.dataValues))
			.catch(e => res.status(404).send(e))

	})
	.delete(function (req, res, next) {
		card.destroy({where: {id: req.params.id}})
			.then(() => res.sendStatus(200))
			.catch(e => res.status(500).send(e))
	})
	.put(function (req, res, next) {
		const updatedCard = req.body
		card.update(updatedCard, {where: {id: req.params.id}})
			.then(() => res.send({status: 'ok'}))
			.catch(e => res.status(500).send(e))
	});

module.exports = router
