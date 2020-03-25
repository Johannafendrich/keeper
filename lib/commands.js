const { readPasswords, writePasswords } = require('./passwords');
const { encrypt, decrypt } = require('./crypto');

function get(key) {
  //Read db.json
  try {
    // Read db.json
    const passwords = readPasswords();
    // log password
    const encryptedPassword = passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(key, password);
  } catch (error) {
    console.error(error);
  }
}

function set(key, value) {
  const encryptedValue = encrypt(value);
  try {
    //Read db.json
    const passwords = readPasswords();
    // Update value by key
    passwords[key] = encryptedValue;

    // Write db.json
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset(key) {
  try {
    const passwords = readPasswords();
    // delete key
    delete passwords[key];

    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

exports.get = get;
exports.set = set;
exports.unset = unset;
