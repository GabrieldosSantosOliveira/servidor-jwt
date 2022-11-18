const { createDecipheriv } = require('crypto');
const decrypt = text => {
  let decipher = createDecipheriv(
    'aes-256-cbc',
    'bf3c199c2470cb477d907b1e0917c17e',
    '5183666c72eec9e4'
  );
  let decrypted = decipher.update(text, 'hex', 'utf8');
  return decrypted + decipher.final('utf8');
};
module.exports = { decrypt };
