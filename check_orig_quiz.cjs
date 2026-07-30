const fs = require('fs');
let f = fs.readFileSync('D:/KVJ Analytics Internship/KVJ Analytics - Copy/Quiz DD/quiz_data.js', 'utf8');
console.log('da_mock matches:', f.match(/"da_mock"/g));
console.log('da_mock3 matches:', f.match(/"da_mock3"/g));
console.log('da_mock2 matches:', f.match(/"da_mock2"/g));
console.log('da_mock1 matches:', f.match(/"da_mock1"/g));
console.log('mock3 matches:', f.match(/"mock3"/g));
