const { createCipheriv } = require('crypto');
require('dotenv/config');
const encrypt = text => {
  const cipher = createCipheriv(
    process.env.ALGORITHM_HASH,
    process.env.PASSWORD_HASH,
    process.env.IV_HASH
  );
  let encrypted = cipher.update(
    text,
    'utf8',
    process.env.METHOD_HASH
  );
  encrypted += cipher.final(process.env.METHOD_HASH);
  return encrypted;
};
module.exports = { encrypt };
