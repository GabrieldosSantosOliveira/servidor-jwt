const { createDecipheriv } = require('crypto');
require('dotenv/config');
const decrypt = text => {
  let decipher = createDecipheriv(
    process.env.ALGORITHM_HASH,
    process.env.PASSWORD_HASH,
    process.env.IV_HASH
  );
  let decrypted = decipher.update(
    text,
    process.env.METHOD_HASH,
    'utf8'
  );
  return decrypted + decipher.final('utf8');
};
module.exports = { decrypt };
