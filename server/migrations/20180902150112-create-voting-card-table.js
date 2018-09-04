const cardsData = require('../stubData')
module.exports = {
	up(q, Sequelize) {
		return q.createTable('card', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true
			},
			title:{type: Sequelize.STRING},
			description:{type: Sequelize.STRING},
			updatedAt: {type: Sequelize.DATE},
			createdAt: {type: Sequelize.DATE},
			votes: {type: Sequelize.INTEGER},
		}).then(()=>{
			return q.bulkInsert('card', cardsData)
		})
	},

	down(q) {
		return q.dropTable('card')
	},
}
