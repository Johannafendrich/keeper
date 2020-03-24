const readline = require('readline');

function askQuestion(question, { hideAnswer } = {}) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
    // hide password
    if (hideAnswer) {
      readlineInterface._writeToOutput = function () {
        readlineInterface.output.write('');
      };
    }
  });
}
function askForPassword(key) {
  return askQuestion(`Enter password of ${key}: `);
}

function askForMasterPassword() {
  return askQuestion('Please enter master Password: ', {
    hideAnswer: true,
  });
}
exports.askForPassword = askForPassword;
exports.askForMasterPassword = askForMasterPassword;
