module.exports = {
	up(q, Sequelize) {
		return q.createTable('card', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			title:{type: Sequelize.STRING},
			description:{type: Sequelize.STRING},
			createdAt: {type: Sequelize.DATE},
			updatedAt: {type: Sequelize.DATE},
			votes: {type: Sequelize.INTEGER},
		})
	},

	down(q) {
		return q.dropTable('card')
	}
}
