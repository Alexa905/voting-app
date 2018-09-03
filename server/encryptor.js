const crypto = require('crypto');
const algorithm = 'aes-128-cbc';
const iv = crypto.randomBytes(16);
const password = "foobar";
const hash = crypto.createHash("sha1");

hash.update(password);

let key = hash.digest().slice(0, 16);

module.exports = {
  encrypt: function encrypt(buffer) {

    let cipher = crypto.createCipheriv(algorithm, key, iv)
    let encryptedPassword = cipher.update(buffer, 'utf8', 'base64');
    return encryptedPassword + cipher.final('base64')
  },

  decrypt: function decrypt(buffer) {
    let decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decryptedPassword = decipher.update(buffer, 'base64', 'utf8');
    return decryptedPassword + decipher.final('utf8');

  }
}

