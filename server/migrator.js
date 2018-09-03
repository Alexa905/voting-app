const { card } = require("./models");

const fillDBTable = (data, dbModel) => {
	let promises = data.map(item => {
		return dbModel
			.findOrCreate({where: {id: item.id}, defaults: item})
			.spread((item, created) => {
				if (!created) {
					dbModel.update(item, {where: {id: item.id}})
				}
			})
	});

	Promise.all(promises)
		.then(x => console.log('Products were successfully added'))
		.catch(console.error);
}

const addProductsToDB = () => {
	const cardData = [
		{id: 0, description: 'Software', votes: 1, title: 'Software Engineer'},
		{id: 1, description: 'Software', votes: 1, title: 'Senior Software Engineer'}
	];
	fillDBTable(cardData, card);
};

addProductsToDB();




