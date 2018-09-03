module.exports = function (sequelize, DataTypes) {
	return sequelize.define('card', {
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		title: {type: DataTypes.STRING, unique: {msg: 'This title already exists'}},
		description: {type: DataTypes.STRING},
		votes: {type: DataTypes.INTEGER},
		updatedAt: {type: DataTypes.DATE},
	})
}
