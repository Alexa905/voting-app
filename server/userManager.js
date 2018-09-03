let users = require('./stubData');
const encryptor = require('./encryptor')

const userManager = {
  getUsers: () => {
	  User.findAll().then(data => {
		  res.json(data)
	  });
  },
  generateId: () => Math.random().toString(36).substr(2, 9),
  findUser: paramId => users.find(user => (user.id).toString() === paramId.toString()),
  deleteUser: user => {
    users.splice(users.indexOf(user), 1)
  },
  updateUser: (user, updatedUser) => {
    if(user.password){
      user.password = encryptor.encrypt(new Buffer(user.password, "utf8"))
    }
    users.splice(users.indexOf(user), 1, updatedUser);
  },
  addUser: user => {
    user.id = userManager.generateId();
    if(user.password){
      user.password = encryptor.encrypt(new Buffer(user.password, "utf8"))
    }
    users.push(user);

  }
}

module.exports = userManager
