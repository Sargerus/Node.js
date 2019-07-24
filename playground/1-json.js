const fs = require('fs');

const dataObject = JSON.parse(
    fs.readFileSync('1-json.json')
    .toString());

dataObject.name = 'Pavel';
dataObject.age = '21';

fs.writeFileSync('1-json.json', JSON.stringify(dataObject));

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

