// const userName = 'Max';
// console.log(`Hi ${userName}!`);

const fs = require('fs');

fs.readFile('user-data.text', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('user-data.text', 'username = Max', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Write to file!');
  }
});