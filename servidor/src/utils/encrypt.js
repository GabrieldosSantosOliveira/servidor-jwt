const { createCipheriv } = require('crypto');
require('dotenv/config');
const encrypt = text => {
  const cipher = createCipheriv(
    'aes-256-cbc',
    'bf3c199c2470cb477d907b1e0917c17e',
    '5183666c72eec9e4'
  );
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};
module.exports = { encrypt };
