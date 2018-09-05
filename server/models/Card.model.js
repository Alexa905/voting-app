module.exports = function (sequelize, DataTypes) {
	return sequelize.define('card', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true
		},
		title: {type: DataTypes.STRING, unique: {msg: 'This title already exists'}},
		description: {type: DataTypes.STRING},
		votes: {type: DataTypes.INTEGER},
		users: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: []},
		updatedAt: {type: DataTypes.DATE},
		createdAt: {type: DataTypes.DATE}
	}, {
		freezeTableName: true
	})
}
