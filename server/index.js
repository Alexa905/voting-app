require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => console.log(`App listening on port ${port}!`))







