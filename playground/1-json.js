const fs = require('fs');

const dataObject = JSON.parse(
    fs.readFileSync('1-json.json')
    .toString());

dataObject.name = 'Pavel';
dataObject.age = '21';

fs.writeFileSync('1-json.json', JSON.stringify(dataObject));

